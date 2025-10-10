import { trim } from '../../src/string/trim';

describe('trim.all', () => {
  it('trims both ends', () => {
    expect(trim.function('  hello  ')).toBe('hello');
  });
});

describe('trim.start', () => {
  it('trims only the start', () => {
    expect(trim.start('  hello  ')).toBe('hello  ');
  });
});

describe('trim.end', () => {
  it('trims only the end', () => {
    expect(trim.end('  hello  ')).toBe('  hello');
  });
});

describe('trim.normalizeWhitespace', () => {
  it('trims and collapses internal spaces', () => {
    expect(trim.normalizeWhitespace('   this   is   a   test   ')).toBe('this is a test');
  });

  it('handles tabs and newlines', () => {
    expect(trim.normalizeWhitespace('\tthis\nis\r\ta test\n')).toBe('this is a test');
  });
});
