import { text, log, isCancel, confirm } from '@clack/prompts';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { EOL } from 'node:os';
import rootPkg from '../package.json' with { type: 'json' };

const args = process.argv.slice(2);

function exitOnCancel(result) {
  if (isCancel(result)) {
    log.error('Operation cancelled by user');
    process.exit(0);
  }
}

const allowedKeys = [
  'license',
  'author',
  'homepage',
  'repository',
  'bugs',
  'files',
  'engines',
  'type',
];

function buildPackageJson(name, description) {
  const pkg = {};

  pkg.name = `@js-utils-kit/${name}`;
  pkg.version = '0.0.0';
  pkg.description = description;
  pkg.private = false;
  for (const key of allowedKeys) {
    if (rootPkg[key]) pkg[key] = structuredClone(rootPkg[key]);
  }
  pkg.main = './dist/index.cjs';
  pkg.module = './dist/index.mjs';
  pkg.types = './dist/index.d.cts';
  pkg.exports = {
    '.': {
      import: './dist/index.mjs',
      require: './dist/index.cjs',
    },
  };
  pkg.scripts = {
    build: 'tsdown',
    test: 'vitest run',
  };
  pkg.dependencies = {};

  if (pkg.repository) {
    pkg.repository.directory = `packages/@js-utils-kit/${name}`;
  }

  return pkg;
}

async function createLibrary() {
  const name = await text({
    message: 'Enter the library name',
    placeholder: 'e.g. string, json',
    initialValue: args[0],
    validate: (value) => {
      value.trim();

      if (!value) return 'Library name cannot be empty';

      if (existsSync(join('packages', value))) return `A package named "${value}" already exists`;
    },
  });

  exitOnCancel(name);

  const description = await text({
    message: 'Enter the description',
    placeholder: 'e.g. String utilities',
    initialValue: args[1] ? `${args[1]} utilities` : `${name} utilities`,
    validate: (value) => {
      value.trim();

      if (!value) return 'Library description cannot be empty';
    },
  });

  exitOnCancel(description);

  const folder = join('packages', '@js-utils-kit', name);

  mkdirSync(folder, { recursive: true });

  writeFileSync(
    join(folder, 'package.json'),
    JSON.stringify(buildPackageJson(name.trim(), description.trim()), null, 2) + EOL,
  );

  writeFileSync(
    join(folder, 'tsconfig.json'),
    JSON.stringify(
      {
        extends: '../../../tsconfig.base.json',
        include: ['src', 'test'],
      },
      null,
      2,
    ) + EOL,
  );

  writeFileSync(
    join(folder, 'tsdown.config.ts'),
    `import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    format: ['esm', 'cjs'],
    minify: true,
    dts: true,
    exports: {
      customExports(pkg) {
        delete pkg['./package.json'];
        return pkg;
      },
    },
  },
]);
`,
  );

  mkdirSync(join(folder, 'src'), { recursive: true });
  mkdirSync(join(folder, 'test'), { recursive: true });

  writeFileSync(join(folder, 'src', 'index.ts'), '');
}

while (true) {
  await createLibrary();

  const again = await confirm({
    message: 'Do you want to create another library?',
  });

  exitOnCancel(again);

  if (!again) {
    log.info('Goodbye 👋');
    process.exit(0);
  }
}
