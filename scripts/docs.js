import { writeFileSync } from 'node:fs';
import { glob } from 'node:fs/promises';
import { EOL } from 'node:os';
import { posix } from 'node:path';
import zylog from 'zylog';
import config from '../typedoc.json' with { type: 'json' };

const IGNORE_FOLDERS = ['core', 'js-utils-kit', 'juk-cli'];

const toPosix = (path) => posix.normalize(path.replaceAll('\\', '/'));

const entries = await Array.fromAsync(
  glob(['packages/*/src/index.ts', 'packages/@js-utils-kit/*/src/index.ts'], {
    exclude: (p) => {
      p = toPosix(p);

      const ignored = IGNORE_FOLDERS.some(
        (f) => p.includes(`packages/${f}/`) || p.includes(`packages/@js-utils-kit/${f}/`),
      );

      if (ignored) zylog.warn(`Ignored ${p}`);

      return ignored;
    },
  }),
);

config.entryPoints = entries.map(toPosix);

writeFileSync('typedoc.json', JSON.stringify(config, null, 2) + EOL);
zylog.success('Updated typedoc.json');
