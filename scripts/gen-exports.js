import { join, resolve } from 'path';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';

const cwd = process.cwd();

const DIST_DIR = resolve(cwd, 'dist');
const packageJson = resolve(cwd, 'package.json');

function getExportsEntries() {
  const entries = {};
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

(() => {
  console.log('Generating "exports" field for package.json...');
  const pkg = JSON.parse(readFileSync(packageJson, 'utf8'));
  pkg.exports = generateExportsField();
  console.log("Writing 'exports' field to package.json...");
  writeFileSync(packageJson, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
  console.log('"exports" field generated successfully!');
})();
