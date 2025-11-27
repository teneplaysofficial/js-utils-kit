import { expect, it } from 'vitest';
import { longestWord } from '../src/longestWord';

it('returns the longest word when unique', () => {
  expect(longestWord('js utils kit')).toBe('utils');
});

it('handles multiple spaces', () => {
  expect(longestWord('short   longerword   mid')).toBe('longerword');
});

it('returns the only word', () => {
  expect(longestWord('hello')).toBe('hello');
});

it('returns empty string for empty input', () => {
  expect(longestWord('')).toBe('');
});

it('ignores symbols when determining length', () => {
  expect(longestWord('hi!! wow?? amazing...')).toBe('amazing');
});

it('returns array of words if multiple share longest length', () => {
  expect(longestWord('alpha delta gamma')).toEqual(['alpha', 'delta', 'gamma']);
});

it('returns a single word if all ties are the same', () => {
  expect(longestWord('alpha alpha')).toBe('alpha');
});

it('returns an array if multiple unique words share longest length', () => {
  expect(longestWord('alpha gamma')).toEqual(['alpha', 'gamma']);
});
