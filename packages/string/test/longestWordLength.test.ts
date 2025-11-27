import { expect, it } from 'vitest';
import { longestWordLength } from '../src/longestWordLength';

it('returns the length of the longest word', () => {
  expect(longestWordLength('js utils kit')).toBe(5);
});

it('handles multiple spaces', () => {
  expect(longestWordLength('short   longerword   mid')).toBe(10);
});

it('handles single word', () => {
  expect(longestWordLength('hello')).toBe(5);
});

it('returns 0 for empty string', () => {
  expect(longestWordLength('')).toBe(0);
});

it('ignores punctuation when counting length', () => {
  expect(longestWordLength('hi!! wow?? amazing...')).toBe(7);
});

it('handles single-character words', () => {
  expect(longestWordLength('a ab abc abcd')).toBe(4);
});

it('handles tie between multiple longest words', () => {
  expect(longestWordLength('alpha beta')).toBe(5);
});

it('handles very long word', () => {
  expect(longestWordLength(`short ${'a'.repeat(50)} tiny`)).toBe(50);
});
