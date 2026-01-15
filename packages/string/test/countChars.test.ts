import { expect, it } from 'vitest';
import { countChars } from '../src';

it('should count total characters', () => {
  expect(countChars('js-utils-kit')).toBe(1);
  expect(countChars('js utils kit')).toBe(3);
});

it('should count occurrences of a specific character', () => {
  expect(countChars('banana', 'a')).toBe(3);
  expect(countChars('banana', 'n')).toBe(2);
  expect(countChars('banana', 'z')).toBe(0);
});
