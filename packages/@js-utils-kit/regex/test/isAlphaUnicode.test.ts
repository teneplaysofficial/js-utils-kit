import { expect, it } from 'vitest';
import { IS_ALPHA_UNICODE_REGEX } from '../src';

it('should match ASCII letters', () => {
  expect(IS_ALPHA_UNICODE_REGEX.test('Hello')).toBe(true);
});

it('should match Cyrillic letters', () => {
  expect(IS_ALPHA_UNICODE_REGEX.test('Привет')).toBe(true);
});

it('should match Arabic letters', () => {
  expect(IS_ALPHA_UNICODE_REGEX.test('مرحبا')).toBe(true);
});

it('should match Chinese characters', () => {
  expect(IS_ALPHA_UNICODE_REGEX.test('你好')).toBe(true);
});

it('should match accented Latin characters', () => {
  expect(IS_ALPHA_UNICODE_REGEX.test('café')).toBe(true);
});

it('should not match numbers', () => {
  expect(IS_ALPHA_UNICODE_REGEX.test('123')).toBe(false);
  expect(IS_ALPHA_UNICODE_REGEX.test('Hello123')).toBe(false);
});

it('should not match symbols or punctuation', () => {
  expect(IS_ALPHA_UNICODE_REGEX.test('hello!')).toBe(false);
});

it('should not match whitespace', () => {
  expect(IS_ALPHA_UNICODE_REGEX.test('hello world')).toBe(false);
});

it('should not match empty string', () => {
  expect(IS_ALPHA_UNICODE_REGEX.test('')).toBe(false);
});
