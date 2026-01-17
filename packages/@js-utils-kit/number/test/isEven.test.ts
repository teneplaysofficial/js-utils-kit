import { expect, it } from 'vitest';
import { isEven } from '../src';

it('detect even numbers', () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
});
