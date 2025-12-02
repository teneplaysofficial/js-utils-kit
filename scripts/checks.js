import { glob, readFile } from 'node:fs/promises';
import { basename } from 'node:path';
import sylog from 'sylog';

let safeExit = true;

/**
 * @typedef {"--fix-core"} CliFlags
 *
 *  @type {Set<CliFlags>}
 */
const args = new Set(process.argv.slice(2));

// Verify core contains all internal packages

/**
 * @type {string[]}
 */
const pkgNames = await Array.fromAsync(
  glob('packages/*', {
    exclude: ['*/core'],
  }),
);
const lib_names = pkgNames.map((p) => `@js-utils-kit/${basename(p)}`);
const corePkg = JSON.parse(await readFile('packages/core/package.json'));
const missing = lib_names.filter((l) => !Object.keys(corePkg.dependencies).includes(l));

if (missing.length > 1) {
  safeExit = true;
  sylog.warn('Missing packages in core:', missing.join(', '));
  sylog.info('Run with "--fix-core" to automatically add missing packages');
}

if (args.has('--fix-core')) {
  // TODO: implement fix logic
}

process.exit(safeExit ? 0 : 1);
