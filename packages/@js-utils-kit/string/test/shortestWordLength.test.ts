import { expect, it } from 'vitest';
import { shortestWordLength } from '../src';

it('returns 0 for an empty string', () => {
  expect(shortestWordLength('')).toBe(0);
  expect(shortestWordLength('   ')).toBe(0);
});

it('returns the length of the only word', () => {
  expect(shortestWordLength('hello')).toBe(5);
});

it('returns the length of the shortest word among multiple', () => {
  expect(shortestWordLength('js utils kit')).toBe(2);
  expect(shortestWordLength('one three five')).toBe(3);
});

it('ignores multiple spaces between words', () => {
  expect(shortestWordLength('a    bb   ccc')).toBe(1);
});

it('ignores punctuation when counting length', () => {
  expect(shortestWordLength('hi! wow?? ok')).toBe(2);
});

it('handles single-character words', () => {
  expect(shortestWordLength('a ab abc abcd')).toBe(1);
});

it('handles tie between multiple shortest words', () => {
  expect(shortestWordLength('dog cat')).toBe(3);
});

it('handles long words mixed with short ones', () => {
  expect(shortestWordLength(`short ${'a'.repeat(50)} tiny`)).toBe(4);
});
