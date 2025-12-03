import { expect, it } from 'vitest';
import { uniqueChars } from '../src/uniqueChars';

it('should return unique characters', () => {
  expect(uniqueChars('banana').sort()).toEqual(['a', 'b', 'n']);
  expect(uniqueChars('banana')).toEqual(['b', 'a', 'n']);
});

it('should handle empty string', () => {
  expect(uniqueChars('')).toEqual([]);
});
