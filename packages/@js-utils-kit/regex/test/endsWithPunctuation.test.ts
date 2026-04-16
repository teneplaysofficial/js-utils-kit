import { expect, it } from 'vitest';
import { ENDS_WITH_PUNCTUATION_REGEX } from '../src';

it('should match strings ending with ASCII punctuation', () => {
  expect(ENDS_WITH_PUNCTUATION_REGEX.test('Hello!')).toBe(true);
  expect(ENDS_WITH_PUNCTUATION_REGEX.test('What?')).toBe(true);
  expect(ENDS_WITH_PUNCTUATION_REGEX.test('Nice.')).toBe(true);
});

it('should match strings ending with Unicode punctuation', () => {
  expect(ENDS_WITH_PUNCTUATION_REGEX.test('你好。')).toBe(true);
  expect(ENDS_WITH_PUNCTUATION_REGEX.test('مرحبا!')).toBe(true);
});

it('should not match strings without ending punctuation', () => {
  expect(ENDS_WITH_PUNCTUATION_REGEX.test('Hello')).toBe(false);
  expect(ENDS_WITH_PUNCTUATION_REGEX.test('Test123')).toBe(false);
});

it('should not match if punctuation is not at the end', () => {
  expect(ENDS_WITH_PUNCTUATION_REGEX.test('Hello! World')).toBe(false);
});

it('should handle empty strings', () => {
  expect(ENDS_WITH_PUNCTUATION_REGEX.test('')).toBe(false);
});

it('should match single punctuation character', () => {
  expect(ENDS_WITH_PUNCTUATION_REGEX.test('!')).toBe(true);
  expect(ENDS_WITH_PUNCTUATION_REGEX.test('。')).toBe(true);
});
