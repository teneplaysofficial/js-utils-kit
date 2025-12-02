import { expect, it } from 'vitest';
import { randomFloat } from '../src/randomFloat';

it('returns a float within the given range (min inclusive, max exclusive)', () => {
  for (let i = 0; i < 100; i++) {
    const result = randomFloat(1, 5);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThan(5);
  }
});

it('returns the same number when min and max are very close', () => {
  const result = randomFloat(3.5, 3.50001);
  expect(result).toBeGreaterThanOrEqual(3.5);
  expect(result).toBeLessThan(3.50001);
});

it('works with negative ranges', () => {
  for (let i = 0; i < 100; i++) {
    const result = randomFloat(-10, -5);
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThan(-5);
  }
});
