import { createWriteStream } from 'node:fs';
import { glob, readFile, stat } from 'node:fs/promises';
import { EOL } from 'node:os';
import { basename, join } from 'node:path';

async function generateIndex(dir, isRoot = false) {
  const output = createWriteStream(join(dir, 'index.ts'));

  if (isRoot) {
    const pkg = JSON.parse(await readFile(join(dir, '..', 'package.json'), 'utf-8'));

    output.write(
      `/**
 * ${pkg.description}
 *
 * @module ${pkg.name.split('/')[1]}
 */${EOL}`,
    );

    if (pkg.name === '@js-utils-kit/core')
      for (const [dep] of Object.entries(pkg.dependencies ?? {}).sort(([a], [b]) =>
        a.localeCompare(b),
      )) {
        if (dep.startsWith('@js-utils-kit/') && dir.endsWith('src')) {
          output.write(`export * from '${dep}';${EOL}`);
        }
      }
  }

  const entries = await Array.fromAsync(glob(join(dir, '*'), { exclude: ['**/index.ts'] }));
  const folders = [];
  const files = [];

  for (const entry of entries) {
    const s = await stat(entry);
    if (s.isDirectory()) folders.push(entry);
    else if (entry.endsWith('.ts')) files.push(entry);
  }

  // folders first
  for (const folder of folders.sort()) {
    const name = basename(folder);
    output.write(`export * from './${name}/index';${EOL}`);
    await generateIndex(folder);
  }

  // files
  for (const file of files.sort()) {
    output.write(`export * from './${basename(file, '.ts')}';${EOL}`);
  }

  output.end();
}

for await (const pkgDir of glob('packages/@js-utils-kit/*')) {
  await generateIndex(join(pkgDir, 'src'), true);
}
