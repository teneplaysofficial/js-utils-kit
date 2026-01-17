import { expect, it } from 'vitest';
import { isSnakeCase } from '../src';

it('returns true for snake_case strings', () => {
  expect(isSnakeCase('my_variable')).toBe(true);
  expect(isSnakeCase('one_two_three')).toBe(true);
});

it('returns false for other cases', () => {
  expect(isSnakeCase('MyVariable')).toBe(false);
  expect(isSnakeCase('my-variable')).toBe(false);
  expect(isSnakeCase('myVariable')).toBe(false);
  expect(isSnakeCase('my__variable')).toBe(false);
});
