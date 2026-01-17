import ansi from 'ansilory';
import { pkg } from './constant';
import { examples, options } from './flags';

const binName = pkg.name.split(/[@/]/)[1];
const maxFlagLength = Math.max(...options.map((opt) => opt.flags.length));

export default function printHelp() {
  console.log(`
${ansi.bold.apply('Usage:')} ${ansi.cyan.apply(binName)} [options]

${ansi.bold.apply('Options:')}
${options.map((opt) => `  ${ansi.yellow.apply(opt.flags.padEnd(maxFlagLength))}  ${opt.desc}`).join('\n')}

${ansi.bold.apply('Examples:')}
${examples.map((e) => `  ${ansi.cyan.apply(`${binName} ${e}`)}`).join('\n')}
`);
}
