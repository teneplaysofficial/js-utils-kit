import { expect, it } from 'vitest';
import { isKebabCase } from '../src';

it('returns true for kebab-case strings', () => {
  expect(isKebabCase('my-variable')).toBe(true);
  expect(isKebabCase('one-two-three')).toBe(true);
});

it('returns false for other cases', () => {
  expect(isKebabCase('MyVariable')).toBe(false);
  expect(isKebabCase('my_variable')).toBe(false);
  expect(isKebabCase('myVariable')).toBe(false);
  expect(isKebabCase('my--variable')).toBe(false);
});
