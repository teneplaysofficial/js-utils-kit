import { glob } from 'node:fs/promises';
import config from '../typedoc.json' with { type: 'json' };
import { writeFileSync } from 'node:fs';
import { EOL } from 'node:os';

const IGNORE_FOLDERS = ['core', 'cli'];
const entries = await Array.fromAsync(
  glob('packages/*/src/index.ts', {
    exclude: IGNORE_FOLDERS.map((f) => `packages/${f}`),
  }),
);

config.entryPoints = entries.map((f) => f.replace(/\\/g, '/'));
writeFileSync('typedoc.json', JSON.stringify(config, null, 2) + EOL);
