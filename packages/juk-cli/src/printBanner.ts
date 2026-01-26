import { pkg } from './constant';
import figlet from 'figlet';

export default async function printBanner() {
  try {
    const data = await figlet.text(pkg.displayName || pkg.name, { font: 'Slant' });

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
