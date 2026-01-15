import { expect, it } from 'vitest';
import { countSubstring } from '../src';

it('should count occurrences of a substring', () => {
  expect(countSubstring('lololol', 'lo')).toBe(3);
});

it('should return 0 if substring not found', () => {
  expect(countSubstring('hello', 'xyz')).toBe(0);
});

it('should handle repeated single character substrings', () => {
  expect(countSubstring('aaaaa', 'a')).toBe(5);
});

it('returns 0 for empty substring input', () => {
  expect(countSubstring('abc', '')).toBe(0);
});
