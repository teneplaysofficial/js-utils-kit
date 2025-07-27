import {
  padLeft,
  padRight,
  repeatString,
  truncate,
} from '../../src/string/format';

describe('padLeft', () => {
  it('pads string on the left with spaces by default', () => {
    expect(padLeft('42', 5)).toBe('   42');
  });

  it('pads string on the left with custom char', () => {
    expect(padLeft('42', 5, '0')).toBe('00042');
  });

  it('returns the same string if already long enough', () => {
    expect(padLeft('hello', 3)).toBe('hello');
  });
});

describe('padRight', () => {
  it('pads string on the right with spaces by default', () => {
    expect(padRight('hi', 5)).toBe('hi   ');
  });

  it('pads string on the right with custom char', () => {
    expect(padRight('hi', 5, '.')).toBe('hi...');
  });

  it('returns the same string if already long enough', () => {
    expect(padRight('hello', 2)).toBe('hello');
  });
});

describe('truncate', () => {
  it('truncates and appends suffix if string is too long', () => {
    expect(truncate('This is a long text', 10)).toBe('This is...');
  });

  it('returns original string if it fits', () => {
    expect(truncate('Short', 10)).toBe('Short');
  });

  it('handles custom suffix', () => {
    expect(truncate('This is a long one', 11, '>>>')).toBe('This is >>>');
  });

  it('does not truncate too much if suffix is long', () => {
    expect(truncate('1234567890', 5, '...')).toBe('12...');
  });
});

describe('repeatString', () => {
  it('repeats string n times', () => {
    expect(repeatString('ab', 3)).toBe('ababab');
  });

  it('returns empty string if count is 0', () => {
    expect(repeatString('ab', 0)).toBe('');
  });

  it('returns empty string if input is empty', () => {
    expect(repeatString('', 5)).toBe('');
  });
});
