import { expect, it } from 'vitest';
import { countChars } from '../src';

it('should count total characters', () => {
  expect(countChars('js-utils-kit')).toBe(12);
  expect(countChars('js utils kit')).toBe(12);
  expect(countChars('hello')).toBe(5);
});

it('should count whitespace characters correctly', () => {
  expect(countChars(' ')).toBe(1);
  expect(countChars('   ')).toBe(3);
  expect(countChars('\t')).toBe(1);
  expect(countChars('\n')).toBe(1);
  expect(countChars('a b\tc\nd')).toBe(7);
});

it('should count occurrences of a specific character', () => {
  expect(countChars('banana', 'a')).toBe(3);
  expect(countChars('banana', 'n')).toBe(2);
  expect(countChars('banana', 'z')).toBe(0);
});

it('should count occurrences including whitespace characters', () => {
  expect(countChars('a b c', ' ')).toBe(2);
  expect(countChars('\t\t', '\t')).toBe(2);
  expect(countChars('\n\n', '\n')).toBe(2);
});

it('should handle empty string', () => {
  expect(countChars('')).toBe(0);
  expect(countChars('', 'a')).toBe(0);
});

it('should handle single character strings', () => {
  expect(countChars('a')).toBe(1);
  expect(countChars('a', 'a')).toBe(1);
  expect(countChars('a', 'b')).toBe(0);
});

it('should handle repeated characters', () => {
  expect(countChars('aaaa')).toBe(4);
  expect(countChars('aaaa', 'a')).toBe(4);
});

it('should be case-sensitive', () => {
  expect(countChars('AaAa', 'a')).toBe(2);
  expect(countChars('AaAa', 'A')).toBe(2);
});

it('should handle special characters', () => {
  expect(countChars('!@#$%^')).toBe(6);
  expect(countChars('!@#$%^', '@')).toBe(1);
});

it('should handle unicode characters', () => {
  expect(countChars('🙂')).toBe(1);
  expect(countChars('🙂🙂')).toBe(2);
  expect(countChars('🙂🙂', '🙂')).toBe(2);
});
