import { expect, it } from 'vitest';
import { isLowerCase } from '../src/isLowerCase';

it('returns true for all-lowercase strings', () => {
  expect(isLowerCase('hello')).toBe(true);
});

it('returns false if any character is uppercase', () => {
  expect(isLowerCase('Hello')).toBe(false);
  expect(isLowerCase('HELLO')).toBe(false);
});
