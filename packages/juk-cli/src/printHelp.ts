import path from 'node:path';
import { pkg } from './constant';
import { examples, options } from './flags';

const DEFAULT_BIN = 'juk';
const binNames = Object.keys(pkg.bin ?? {});
const invokedBin = path.basename(process.argv[1] ?? '');
const binName = binNames.includes(invokedBin) ? invokedBin : DEFAULT_BIN;
const maxFlagLength = Math.max(...options.map((opt) => opt.flags.length));

export default function printHelp() {
  console.log(`
Usage: ${binName} [options]

Options:
${options.map((opt) => `  ${opt.flags.padEnd(maxFlagLength)}  ${opt.desc}`).join('\n')}

Examples:
${examples.map((e) => `  ${binName} ${e}`).join('\n')}
`);
}
