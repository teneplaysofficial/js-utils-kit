import { pkg } from './constant';
import figlet from 'figlet';

export default function printBanner() {
  try {
    const data = figlet.textSync(pkg.displayName || pkg.name, { font: 'Slant' });

    if (!data) {
      console.error('Failed to generate ASCII banner');
      return;
    }

    const lines = data.split('\n');
    const versionText = `v${pkg.version}`;
    const lastLineIndex = lines.findLastIndex((line) => line.trim().length > 0);

    if (lastLineIndex !== -1) {
      lines[lastLineIndex] += versionText;
    }

    console.log(lines.join('\n'));
  } catch (err) {
    console.error('Figlet error:', err);
  }
}
