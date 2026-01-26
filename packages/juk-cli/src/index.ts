import process, { exit } from 'node:process';
import { knownFlags } from './flags';
import { Flag } from './types';
import { pkg } from './constant';
import printHelp from './printHelp';
import { isCI } from '@js-utils-kit/env';
import printBanner from './printBanner';

const rawArgs = process.argv.slice(2);
const invalidFlags = rawArgs.filter((arg) => !knownFlags.includes(arg));

if (invalidFlags.length) {
  console.error(
    `Unknown flag(s): ${invalidFlags.join(', ')}\nRun 'juk-cli --help' for usage information.`,
  );
  exit(1);
}

const args = new Set<Flag>(rawArgs as Flag[]);

if (args.has('-v') || args.has('--version')) {
  console.log(pkg.version);
  exit(0);
}

if (args.has('-h') || args.has('--help')) {
  printHelp();
  exit(0);
}

if (args.has('--is-ci')) {
  exit(isCI ? 0 : 1);
}

await printBanner();

printHelp();
exit(0);
