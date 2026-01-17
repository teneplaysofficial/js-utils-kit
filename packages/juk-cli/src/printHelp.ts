import ansi from 'ansilory';
import { pkg } from './constant';
import { examples, options } from './flags';
import path from 'node:path';

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

const DEFAULT_BIN = 'juk';
const binNames = Object.keys(pkg.bin ?? {});
const invokedBin = path.basename(process.argv[1] ?? '');
const binName = binNames.includes(invokedBin) ? invokedBin : DEFAULT_BIN;
const maxFlagLength = Math.max(...options.map((opt) => opt.flags.length));

export default function printHelp() {
  console.log(`
${ansi.bold.apply('Usage:')} ${ansi.cyan.apply(binName)} [options]

${ansi.bold.apply('Options:')}
${options
  .map((opt) => `  ${ansi.yellow.apply(opt.flags.padEnd(maxFlagLength))}  ${opt.desc}`)
  .join('\n')}

${ansi.bold.apply('Examples:')}
${examples.map((e) => `  ${ansi.cyan.apply(`${binName} ${e}`)}`).join('\n')}
`);
}
