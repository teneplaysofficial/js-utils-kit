import { access, readdir, readFile, writeFile } from 'node:fs/promises';
import { EOL } from 'node:os';
import { join, relative, sep } from 'node:path';
import { Node, Project, QuoteKind } from 'ts-morph';
import zylog from 'zylog';

const ROOT = process.cwd();
const PACKAGES_DIRS = [join(ROOT, 'packages')];
const IGNORE_PACKAGE_DIRS = ['js-utils-kit', 'juk-cli'];
const IGNORE_SRC_DIRS = ['utils'];

const sortPaths = (a, b) => a.localeCompare(b);
const posix = (p) => p.split(sep).join('/');
const rel = (p) => posix(relative(ROOT, p));

zylog.info('Initializing export generation');

const project = new Project({
  tsConfigFilePath: join(ROOT, 'tsconfig.json'),
  skipAddingFilesFromTsConfig: true,
  manipulationSettings: { quoteKind: QuoteKind.Single },
});

zylog.info('Loading source files');

project.addSourceFilesAtPaths([
  'packages/**/src/**/*.ts',
  '!packages/js-utils-kit',
  '!packages/juk-cli',
  '!**/index.ts',
  '!**/node_modules/**',
]);

zylog.success(`Loaded ${project.getSourceFiles().length} source files`);

const getPackageName = (file) => {
  const p = posix(file).split('/');
  const i = p.indexOf('packages');

  if (i === -1) return 'unknown';

  const scopeOrName = p[i + 1];
  const maybeName = p[i + 2];

  if (scopeOrName?.startsWith('@') && maybeName) {
    return `${scopeOrName}/${maybeName}`;
  }

  return scopeOrName ?? 'unknown';
};

const readPkg = async (dir) => JSON.parse(await readFile(join(dir, 'package.json'), 'utf8'));

const header = (pkg) =>
  `/**
 * ${pkg.description ?? ''}
 *
 * @module ${pkg.displayName || pkg.name.split('/')[1] || pkg.name}
 */`;

const listDir = async (dir) => {
  const e = await readdir(dir, { withFileTypes: true });
  return {
    dirs: e
      .filter((d) => d.isDirectory() && !IGNORE_SRC_DIRS.includes(d.name))
      .map((d) => d.name)
      .sort(sortPaths),
    files: e
      .filter((f) => f.isFile() && f.name.endsWith('.ts') && f.name !== 'index.ts')
      .map((f) => f.name.replace(/\.ts$/, ''))
      .sort(sortPaths),
  };
};

const ensureIndex = (file) => {
  const existing = project.getSourceFile(file);

  if (existing) {
    zylog.warn(`Replacing existing ${rel(file)}`);
    existing.delete();
  }

  return project.createSourceFile(file, '', { overwrite: true });
};

const generateIndex = async (dir, root = false) => {
  zylog.info(`Generating index for ${rel(dir)}`);

  const { dirs, files } = await listDir(dir);
  const indexPath = join(dir, 'index.ts');
  const sf = ensureIndex(indexPath);

  sf.getStatements().forEach((s) => {
    s.remove();
  });

  if (root) {
    const pkg = await readPkg(join(dir, '..'));

    zylog.success(`Loaded package ${pkg.name}`);

    sf.addStatements(header(pkg));

    if (pkg.name === '@js-utils-kit/core') {
      zylog.info('Adding core package re-exports');
      Object.keys(pkg.dependencies ?? {})
        .filter((d) => d.startsWith('@js-utils-kit/'))
        .sort(sortPaths)
        .forEach((d) => {
          sf.addExportDeclaration({ moduleSpecifier: d });
        });
    }
  }

  for (const d of dirs) {
    const childDir = join(dir, d);

    zylog.info(`Processing directory ${rel(childDir)}`);

    await generateIndex(childDir);

    sf.addExportDeclaration({ moduleSpecifier: `./${d}/index` });
  }

  files.forEach((f) => {
    sf.addExportDeclaration({ moduleSpecifier: `./${f}` });
  });

  await sf.save();

  zylog.success(`Saved ${rel(indexPath)}`);
};

const classify = (d) => {
  if (Node.isInterfaceDeclaration(d) || Node.isTypeAliasDeclaration(d)) return 'type';
  if (Node.isClassDeclaration(d)) return 'class';
  if (Node.isFunctionDeclaration(d)) return 'function';
  if (Node.isVariableDeclaration(d)) {
    const i = d.getInitializer();
    if (i && (Node.isArrowFunction(i) || Node.isFunctionExpression(i))) return 'function';
    return 'variable';
  }
  return 'unknown';
};

const isDeprecated = (d) =>
  d.getJsDocs?.().some((doc) => doc.getTags().some((t) => t.getTagName() === 'deprecated')) ||
  d
    .getSymbol()
    ?.getDeclarations()?.[0]
    ?.getLeadingCommentRanges()
    ?.some((c) => c.getText().includes('@deprecated'));

const assertNoDuplicates = (project) => {
  zylog.info('Checking export collisions');

  const map = new Map();

  for (const f of project.getSourceFiles()) {
    if (f.getBaseName() === 'index.ts') continue;

    const seen = new Set();
    const filePath = posix(f.getFilePath());

    for (const s of f.getExportSymbols()) {
      const name = s.getName();
      if (!name || name === 'default' || seen.has(name)) continue;
      seen.add(name);

      const decls = s.getDeclarations();
      const valid = decls.some((d) =>
        Node.isFunctionDeclaration(d)
          ? !!d.getBody()
          : Node.isClassDeclaration(d) ||
            Node.isInterfaceDeclaration(d) ||
            Node.isTypeAliasDeclaration(d) ||
            Node.isVariableDeclaration(d),
      );

      if (!valid) continue;
      map.set(name, [...(map.get(name) ?? []), filePath]);
    }
  }

  const conflicts = [...map.entries()].filter(([, f]) => f.length > 1);
  if (!conflicts.length) {
    zylog.success('No export collisions detected');
    return;
  }

  zylog.error('Export collisions detected');
  conflicts.forEach(([n, f]) => {
    zylog.error(n);
    f.forEach((p, i) => {
      zylog.error(`  ${i + 1}. ${p}`);
    });
    zylog.error('');
  });
  process.exit(1);
};

const collectExports = (project) => {
  zylog.info('Collecting exports');

  const exports = {};
  const stats = {
    totalExports: 0,
    deprecatedExports: 0,
    classExports: 0,
    functionExports: 0,
    variableExports: 0,
    typeExports: 0,
  };
  const exportNames = {
    classExports: [],
    functionExports: [],
    variableExports: [],
    typeExports: [],
    deprecatedExports: [],
  };

  for (const f of project.getSourceFiles()) {
    if (f.getBaseName() === 'index.ts') continue;

    const pkg = getPackageName(f.getFilePath());
    exports[pkg] ??= [];

    const seen = new Set();

    for (const s of f.getExportSymbols()) {
      const name = s.getName();
      if (!name || name === 'default' || seen.has(name)) continue;
      seen.add(name);

      const d = s.getDeclarations()[0];
      if (!d || (Node.isFunctionDeclaration(d) && !d.getBody())) continue;

      const kind = classify(d);
      const deprecated = isDeprecated(d);

      if (kind === 'type') {
        stats.typeExports++;
        exportNames.typeExports.push(name);
      } else if (kind === 'function') {
        stats.functionExports++;
        exportNames.functionExports.push(name);
      } else if (kind === 'class') {
        stats.classExports++;
        exportNames.classExports.push(name);
      } else if (kind === 'variable') {
        stats.variableExports++;
        exportNames.variableExports.push(name);
      }

      if (deprecated) {
        stats.deprecatedExports++;
        exportNames.deprecatedExports.push(name);
      }

      exports[pkg].push({
        name,
        declarationKind: d.getKindName(),
        exportKind: kind,
        deprecated,
        filePath: rel(f.getFilePath()),
        line: d.getStartLineNumber(),
      });

      stats.totalExports++;
    }
  }

  exportNames.classExports.sort(sortPaths);
  exportNames.functionExports.sort(sortPaths);
  exportNames.variableExports.sort(sortPaths);
  exportNames.typeExports.sort(sortPaths);
  exportNames.deprecatedExports.sort(sortPaths);

  return {
    summary: {
      ...stats,
      valueExports: stats.functionExports + stats.classExports + stats.variableExports,
      totalPackages: Object.keys(exports).length,
    },
    exportNames,
    exports,
  };
};

for (const BASE_DIR of PACKAGES_DIRS) {
  zylog.info(`Scanning ${rel(BASE_DIR)}`);

  const entries = await readdir(BASE_DIR, { withFileTypes: true });

  for (const d of entries) {
    if (!d.isDirectory() || IGNORE_PACKAGE_DIRS.includes(d.name)) {
      zylog.warn(`Skipping package ${d.name}`);
      continue;
    }

    const pkgDir = join(BASE_DIR, d.name);

    try {
      await access(join(pkgDir, 'src'));

      zylog.success(`Found package source ${rel(pkgDir)}`);

      await generateIndex(join(pkgDir, 'src'), true);
      continue;
    } catch {
      zylog.warn(`No direct src found in ${rel(pkgDir)}`);
    }

    const nested = await readdir(pkgDir, { withFileTypes: true });

    for (const sub of nested) {
      if (!sub.isDirectory()) continue;

      const subPkgDir = join(pkgDir, sub.name);

      try {
        await access(join(subPkgDir, 'src'));

        zylog.success(`Found scoped package source ${rel(subPkgDir)}`);

        await generateIndex(join(subPkgDir, 'src'), true);
      } catch {
        zylog.warn(`Missing src directory in ${rel(subPkgDir)}`);
      }
    }
  }
}

zylog.info('Saving project files');

await project.save();

zylog.success('Project files saved');

assertNoDuplicates(project);

const result = collectExports(project);

zylog.success(
  `Collected ${result.summary.totalExports} exports from ${result.summary.totalPackages} packages`,
);

zylog.info('Writing exports.json');

await writeFile(join(ROOT, 'exports.json'), JSON.stringify({ ...result }, null, 2) + EOL);

zylog.success('exports.json written successfully');
