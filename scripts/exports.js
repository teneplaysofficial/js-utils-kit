import { createWriteStream } from 'node:fs';
import { glob, readFile } from 'node:fs/promises';
import { EOL } from 'node:os';
import { basename, join } from 'node:path';

for await (const dir of glob('packages/@js-utils-kit/*')) {
  const output = createWriteStream(join(dir, 'src', 'index.ts'));
  const pkg = JSON.parse(await readFile(join(dir, 'package.json'), 'utf-8'));

  output.write(
    `/**
* ${pkg.description}
*
* @module ${pkg.name.split('/')[1]}
*/` + EOL,
  );

  for (const [dep] of Object.entries(pkg.dependencies ?? {}).sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    if (dep.startsWith('@js-utils-kit/') && dir.endsWith('core')) {
      output.write(`export * from '${dep}';` + EOL);
    }
  }

  for (const file of (
    await Array.fromAsync(glob(`${dir}/src/*`, { exclude: ['**/index.ts'] }))
  ).sort((a, b) => a.localeCompare(b))) {
    output.write(`export * from './${basename(file, '.ts')}';` + EOL);
  }

  output.end();
}
