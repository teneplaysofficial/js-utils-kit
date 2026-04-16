import { expect, it } from 'vitest';
import { HAS_WHITESPACE_REGEX } from '../src';

it('should match strings containing spaces', () => {
  expect(HAS_WHITESPACE_REGEX.test('Hello World')).toBe(true);
});

it('should match strings containing tabs', () => {
  expect(HAS_WHITESPACE_REGEX.test('Hello\tWorld')).toBe(true);
});

it('should match strings containing newlines', () => {
  expect(HAS_WHITESPACE_REGEX.test('Hello\nWorld')).toBe(true);
});

it('should match strings containing mixed whitespace', () => {
  expect(HAS_WHITESPACE_REGEX.test('Hello \t\n World')).toBe(true);
});

it('should not match strings without whitespace', () => {
  expect(HAS_WHITESPACE_REGEX.test('HelloWorld')).toBe(false);
  expect(HAS_WHITESPACE_REGEX.test('12345')).toBe(false);
});

it('should handle empty strings', () => {
  expect(HAS_WHITESPACE_REGEX.test('')).toBe(false);
});

it('should match string with only whitespace', () => {
  expect(HAS_WHITESPACE_REGEX.test('   ')).toBe(true);
  expect(HAS_WHITESPACE_REGEX.test('\t')).toBe(true);
});
