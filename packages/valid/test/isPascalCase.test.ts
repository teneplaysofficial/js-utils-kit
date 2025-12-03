import { expect, it } from 'vitest';
import { isPascalCase } from '../src/isPascalCase';

it('returns true for PascalCase strings', () => {
  expect(isPascalCase('MyVariable')).toBe(true);
  expect(isPascalCase('Test123Name')).toBe(true);
});

it('returns false for non-PascalCase', () => {
  expect(isPascalCase('myVariable')).toBe(false);
  expect(isPascalCase('my_variable')).toBe(false);
  expect(isPascalCase('my-variable')).toBe(false);
});
