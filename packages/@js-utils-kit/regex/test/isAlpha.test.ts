import { expect, it } from 'vitest';
import { IS_ALPHA_REGEX } from '../src';

it('should match uppercase letters', () => {
  expect(IS_ALPHA_REGEX.test('HELLO')).toBe(true);
});

it('should match lowercase letters', () => {
  expect(IS_ALPHA_REGEX.test('world')).toBe(true);
});

it('should match mixed case letters', () => {
  expect(IS_ALPHA_REGEX.test('HelloWorld')).toBe(true);
});

it('should not match strings with numbers', () => {
  expect(IS_ALPHA_REGEX.test('Hello123')).toBe(false);
  expect(IS_ALPHA_REGEX.test('123')).toBe(false);
});

it('should not match strings with symbols', () => {
  expect(IS_ALPHA_REGEX.test('hello!')).toBe(false);
  expect(IS_ALPHA_REGEX.test('@test')).toBe(false);
});

it('should not match strings with whitespace', () => {
  expect(IS_ALPHA_REGEX.test('hello world')).toBe(false);
});

it('should not match empty string', () => {
  expect(IS_ALPHA_REGEX.test('')).toBe(false);
});
