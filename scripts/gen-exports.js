import { join, resolve } from 'path';
import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'fs';

const cwd = process.cwd();

const DIST_DIR = resolve(cwd, 'dist');
const SRC_DIR = resolve(cwd, 'src');
const packageJson = resolve(cwd, 'package.json');
const jsrJson = resolve(cwd, 'jsr.json');

function getExportsEntries() {
  const entries = {};
  if (!existsSync(DIST_DIR)) {
    console.warn(`Warning: dist directory "${DIST_DIR}" does not exist.`);
    return entries;
  }
  const dirs = readdirSync(DIST_DIR);
  for (const index in dirs) {
    const path = join(DIST_DIR, dirs[index]);
    const name = dirs[index];
    const exportPath = `./${name}`;
    if (statSync(path).isDirectory()) {
      entries[exportPath] = {
        import: `./dist/${name}/index.js`,
        require: `./dist/${name}/index.cjs`,
        types: `./dist/${name}/index.d.ts`,
      };
    }
  }
  return entries;
}

function generateExportsField() {
  const exportsField = {
    '.': {
      import: './dist/index.js',
      require: './dist/index.cjs',
      types: './dist/index.d.ts',
    },
    ...getExportsEntries(),
  };

  return exportsField;
}

function getExportsEntriesForJSR() {
  const entries = {};
  const dirs = readdirSync(SRC_DIR);
  for (const dir of dirs) {
    const path = join(SRC_DIR, dir);
    if (statSync(path).isDirectory()) {
      entries[`./${dir}`] = `./src/${dir}/index.ts`;
    }
  }
  return entries;
}

function generateExportsFieldForJSR() {
  return {
    '.': './src/index.ts',
    ...getExportsEntriesForJSR(),
  };
}

(() => {
  console.log('Generating "exports" field for package.json...');
  const pkg = JSON.parse(readFileSync(packageJson, 'utf8'));
  pkg.exports = generateExportsField();
  console.log("Writing 'exports' field to package.json...");
  writeFileSync(packageJson, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
  console.log('"exports" field generated successfully!');

  console.log('Generating "exports" field for jsr.json...');
  const jsr = JSON.parse(readFileSync(jsrJson, 'utf8'));
  jsr.exports = generateExportsFieldForJSR();
  writeFileSync(jsrJson, JSON.stringify(jsr, null, 2) + '\n', 'utf8');
  console.log('"exports" field generated successfully in jsr.json!');
})();
