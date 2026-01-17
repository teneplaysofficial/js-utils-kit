import { expect, it } from 'vitest';
import { isUpperCase } from '../src';

it('returns true for all-uppercase strings', () => {
  expect(isUpperCase('HELLO')).toBe(true);
});

it('returns false if any character is lowercase', () => {
  expect(isUpperCase('Hello')).toBe(false);
  expect(isUpperCase('hello')).toBe(false);
});
