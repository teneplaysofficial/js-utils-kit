import { expect, it } from 'vitest';
import { isOdd } from '../src/isOdd';

it('detect odd numbers', () => {
  expect(isOdd(2)).toBe(false);
  expect(isOdd(3)).toBe(true);
});
