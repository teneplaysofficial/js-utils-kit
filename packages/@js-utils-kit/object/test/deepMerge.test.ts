import { describe, expect, it } from 'vitest';
import { deepMerge } from '../src';

describe('basic merging', () => {
  it('merges basic objects', () => {
    const result = deepMerge({ a: 1 }, { b: 2 });

    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('later values override earlier ones', () => {
    const result = deepMerge({ a: 1 }, { a: 2 });

    expect(result).toEqual({ a: 2 });
  });

  it('handles multiple objects', () => {
    const result = deepMerge({ a: 1 }, { b: 2 }, { c: 3 });

    expect(result).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  it('handles empty inputs', () => {
    const result = deepMerge({});

    expect(result).toEqual({});
  });
});

describe('nested objects', () => {
  it('merges nested objects', () => {
    const result = deepMerge({ config: { port: 3000 } }, { config: { host: 'localhost' } });

    expect(result).toEqual({
      config: {
        port: 3000,
        host: 'localhost',
      },
    });
  });

  it('handles deep nested merges', () => {
    const result = deepMerge({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } } });

    expect(result).toEqual({
      a: {
        b: {
          c: 1,
          d: 2,
        },
      },
    });
  });
});

describe('array strategies', () => {
  it('replaces arrays by default', () => {
    const result = deepMerge({ items: [1, 2] }, { items: [3] });

    expect(result).toEqual({
      items: [3],
    });
  });

  it('concatenates arrays', () => {
    const result = deepMerge({ items: [1, 2] }, { items: [3] }, { arrayStrategy: 'concat' });

    expect(result).toEqual({
      items: [1, 2, 3],
    });
  });

  it('merges arrays without duplicates', () => {
    const result = deepMerge({ items: [1, 2] }, { items: [2, 3] }, { arrayStrategy: 'merge' });

    expect(result).toEqual({
      items: [1, 2, 3],
    });
  });
});

describe('value replacement', () => {
  it('handles primitive overrides', () => {
    const result = deepMerge({ a: { b: 1 } }, { a: 5 });

    expect(result).toEqual({ a: 5 });
  });

  it('handles object replacing primitive', () => {
    const result = deepMerge({ a: 1 }, { a: { b: 2 } });

    expect(result).toEqual({
      a: { b: 2 },
    });
  });
});

describe('immutability', () => {
  it('does not mutate input objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };

    const result = deepMerge(obj1, obj2 as unknown as object);

    expect(result).toEqual({ a: 1, b: 2 });
    expect(obj1).toEqual({ a: 1 });
    expect(obj2).toEqual({ b: 2 });
  });
});

describe('invalid inputs', () => {
  it('ignores non-object values in params', () => {
    const result = deepMerge({ a: 1 }, null as unknown as object, { b: 2 });

    expect(result).toEqual({
      a: 1,
      b: 2,
    });
  });

  it('ignores array passed as options', () => {
    const result = deepMerge({ a: 1 }, { b: 2 }, [] as unknown as object);

    expect(result).toEqual({
      a: 1,
      b: 2,
    });
  });
});
