import { expect, it } from 'vitest';
import { startsWithUppercase } from '../src';

it('returns true if string starts with uppercase', () => {
  expect(startsWithUppercase('Hello')).toBe(true);
});

it('returns false if string starts with lowercase or digit', () => {
  expect(startsWithUppercase('hello')).toBe(false);
  expect(startsWithUppercase('1Hello')).toBe(false);
});
