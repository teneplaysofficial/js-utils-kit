import { createWriteStream } from 'node:fs';
import { glob, readFile } from 'node:fs/promises';
import { EOL } from 'node:os';
import { basename, join } from 'node:path';

const IGNORE_FOLDERS = ['cli'];
const IGNORE_DEPS = new Set(IGNORE_FOLDERS.map((f) => `@js-utils-kit/${f}`));

for await (const dir of glob('packages/*', {
  exclude: IGNORE_FOLDERS.map((f) => `packages/${f}`),
})) {
  const output = createWriteStream(join(dir, 'src', 'index.ts'));
  const pkg = JSON.parse(await readFile(join(dir, 'package.json'), 'utf-8'));

  for (const [dep] of Object.entries(pkg.dependencies ?? {}).sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    if (dep.startsWith('@js-utils-kit/') && !IGNORE_DEPS.has(dep)) {
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
