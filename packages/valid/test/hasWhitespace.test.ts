import { expect, it } from 'vitest';
import { hasWhitespace } from '../src';

it('returns true if string contains any whitespace', () => {
  expect(hasWhitespace('hello world')).toBe(true);
  expect(hasWhitespace('\tTabbed')).toBe(true);
});

it('returns false for strings with no whitespace', () => {
  expect(hasWhitespace('hello')).toBe(false);
});
