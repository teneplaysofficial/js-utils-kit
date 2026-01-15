import { expect, it } from 'vitest';
import { truncate } from '../src';

it('truncates and appends suffix if string is too long', () => {
  expect(truncate('This is a long text', 10)).toBe('This is a ...');
});

it('returns original string if it fits', () => {
  expect(truncate('Short', 10)).toBe('Short');
});

it('handles custom suffix', () => {
  expect(truncate('This is a long one', 8, '>>>')).toBe('This is >>>');
});

it('does not truncate too much if suffix is long', () => {
  expect(truncate('1234567890', 5, '...')).toBe('12345...');
});
