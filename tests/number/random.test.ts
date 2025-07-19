import { randomFloat, randomInt } from '../../src/number/random';

describe('randomInt', () => {
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
});

describe('randomFloat', () => {
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
});
