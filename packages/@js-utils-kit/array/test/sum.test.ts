import { describe, expect, it } from 'vitest';
import { sum } from '../src';

describe('numbers', () => {
  it('sums a flat array', () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it('returns 0 for empty array', () => {
    expect(sum([])).toBe(0);
  });

  it('handles negative numbers', () => {
    expect(sum([-1, -2, 3])).toBe(0);
  });

  it('handles decimal numbers', () => {
    expect(sum([1.5, 2.5])).toBe(4);
  });
});

describe('nested arrays', () => {
  it('sums nested arrays', () => {
    expect(
      sum([
        [1, 2],
        [3, 4],
      ]),
    ).toBe(10);
  });

  it('sums mixed nested structures', () => {
    expect(sum([1, [2, 3]])).toBe(6);
  });

  it('sums deeply nested arrays', () => {
    expect(sum([1, [2, [3, 4]]])).toBe(10);
  });

  it('sums deeply nested single branch', () => {
    expect(sum([[1, [2, [3]]]])).toBe(6);
  });
});

describe('objects with key', () => {
  it('sums object values by key', () => {
    const items = [{ price: 10 }, { price: 20 }];
    expect(sum(items, 'price')).toBe(30);
  });

  it('sums nested objects by key', () => {
    const items = [{ price: 10 }, [{ price: 20 }]];
    expect(sum(items, 'price')).toBe(30);
  });

  it('sums object property values', () => {
    const items = [{ score: 5 }, { score: 7 }, { score: 8 }];
    expect(sum(items, 'score')).toBe(20);
  });
});

describe('edge cases', () => {
  it('returns NaN for non-numeric values', () => {
    expect(Number.isNaN(sum(['foo' as unknown as number]))).toBe(true);
  });

  it('handles mixed nested numeric structures', () => {
    expect(sum([1, [2, [3]], 4])).toBe(10);
  });
});

describe('nullish values', () => {
  it('ignores null values', () => {
    expect(sum([1, null, 2])).toBe(3);
  });

  it('ignores undefined values', () => {
    expect(sum([1, undefined, 2])).toBe(3);
  });

  it('ignores both null and undefined', () => {
    expect(sum([1, null, undefined, 2])).toBe(3);
  });

  it('ignores null inside nested arrays', () => {
    expect(sum([1, [2, null, 3]])).toBe(6);
  });

  it('ignores undefined inside nested arrays', () => {
    expect(sum([1, [2, undefined, 3]])).toBe(6);
  });

  it('returns 0 when all values are nullish', () => {
    expect(sum([null, undefined])).toBe(0);
  });
});
