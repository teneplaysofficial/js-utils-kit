import { expect, it } from 'vitest';
import { isCamelCase } from '../src/isCamelCase';

it('returns true for camelCase strings', () => {
  expect(isCamelCase('myVariable')).toBe(true);
  expect(isCamelCase('test123Name')).toBe(true);
});

it('returns false for non-camelCase', () => {
  expect(isCamelCase('MyVariable')).toBe(false);
  expect(isCamelCase('my_variable')).toBe(false);
  expect(isCamelCase('my-variable')).toBe(false);
});
