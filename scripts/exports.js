import { createWriteStream } from 'node:fs';
import { glob, readFile } from 'node:fs/promises';
import { EOL } from 'node:os';
import { basename, join } from 'node:path';

for await (const dir of glob('packages/*')) {
  const output = createWriteStream(join(dir, 'src', 'index.ts'));
  const pkg = JSON.parse(await readFile(join(dir, 'package.json')));

  for (const [dep] of Object.entries(pkg.dependencies ?? {})) {
    if (dep.startsWith('@js-utils-kit/')) {
      output.write(`export * from '${dep}';${EOL}`);
    }
  }

  for await (const file of glob(`${dir}/src/*`, { exclude: ['**/index.ts'] })) {
    output.write(`export * from './${basename(file, '.ts')}';${EOL}`);
  }

  output.end();
}
