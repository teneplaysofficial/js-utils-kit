import { expect, it } from 'vitest';
import { randomInt } from '../src';

it('returns a number within the given range (inclusive)', () => {
  for (let i = 0; i < 100; i++) {
    const result = randomInt(1, 5);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(5);
  }
});

it('returns the same value when min and max are equal', () => {
  expect(randomInt(10, 10)).toBe(10);
});

it('works with negative ranges', () => {
  for (let i = 0; i < 100; i++) {
    const result = randomInt(-10, -5);
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThanOrEqual(-5);
  }
});
