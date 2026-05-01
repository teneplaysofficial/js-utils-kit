import process, { exit } from 'node:process';
import { isCI } from '@js-utils-kit/env';
import { pkg } from './constant';
import { knownFlags } from './flags';
import printBanner from './printBanner';
import printHelp from './printHelp';
import type { Flag } from './types';

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

printBanner();

printHelp();
exit(0);
