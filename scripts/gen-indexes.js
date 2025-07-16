import fs from 'fs';
import path from 'path';

const SRC_DIR = path.resolve('src');
const IGNORED_FILES = ['index.ts', 'utils.ts'];
const EXPORT_NAME = /export\s+(?:const|function|class)\s+(\w+)/g;

const getFiles = (dir) =>
  fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.ts') && !IGNORED_FILES.includes(f));

const extractNames = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = [...content.matchAll(EXPORT_NAME)];
  return matches.map((m) => m[1]);
};

const collectExports = () => {
  const seen = new Map();
  const duplicateMap = new Map();

  const folders = fs
    .readdirSync(SRC_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const folder of folders) {
    const dir = path.join(SRC_DIR, folder);
    const files = getFiles(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const names = extractNames(filePath);
      for (const name of names) {
        if (seen.has(name)) {
          if (!duplicateMap.has(name)) {
            duplicateMap.set(name, [seen.get(name)]);
          }
          duplicateMap.get(name).push(filePath);
        } else {
          seen.set(name, filePath);
        }
      }
    }
  }

  const rootFiles = getFiles(SRC_DIR);
  for (const file of rootFiles) {
    const filePath = path.join(SRC_DIR, file);
    const names = extractNames(filePath);
    for (const name of names) {
      if (seen.has(name)) {
        if (!duplicateMap.has(name)) {
          duplicateMap.set(name, [seen.get(name)]);
        }
        duplicateMap.get(name).push(filePath);
      } else {
        seen.set(name, filePath);
      }
    }
  }

  return { folders, rootFiles, duplicateMap };
};

const generateCategoryIndex = (folder) => {
  const dir = path.join(SRC_DIR, folder);
  const files = getFiles(dir);

  const exportAll = files.map(
    (file) => `export * from './${file.replace('.ts', '')}';`,
  );

  let namedImports = '';
  let exportEntries = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const names = extractNames(filePath);
    if (names.length > 0) {
      const importList = names.join(', ');
      const importPath = './' + file.replace('.ts', '');
      namedImports += `import { ${importList} } from '${importPath}';\n`;
      exportEntries.push(...names);
    }
  }

  const exportObject = `export default {\n${exportEntries
    .map((name) => `  ${name},`)
    .join('\n')}\n};`;

  const content = [
    ...exportAll,
    '',
    namedImports.trim(),
    '',
    exportObject,
    '',
  ].join('\n');
  fs.writeFileSync(path.join(dir, 'index.ts'), content);
  console.log(`Generated: ${folder}/index.ts`);
};

const generateRootIndex = (folders, rootFiles) => {
  const lines = folders.map(
    (folder) => `export { default as ${folder} } from './${folder}';`,
  );
  rootFiles.forEach((file) => {
    const name = file.replace('.ts', '');
    lines.push(`export * from './${name}';`);
  });

  const content = lines.join('\n') + '\n';
  fs.writeFileSync(path.join(SRC_DIR, 'index.ts'), content);
  console.log(`Generated: src/index.ts`);
};

const main = () => {
  const { folders, rootFiles, duplicateMap } = collectExports();

  if (duplicateMap.size > 0) {
    console.error('Duplicate export names found. Please resolve:');
    for (const [name, paths] of duplicateMap.entries()) {
      console.error(`\n[${name}]`);
      for (const p of paths) {
        console.error(`  ${p}`);
      }
    }
    process.exit(1);
  }

  for (const folder of folders) {
    generateCategoryIndex(folder);
  }

  generateRootIndex(folders, rootFiles);
};

main();
