import {
  isEmptyObject,
  isNonEmptyObject,
  isObject,
} from '../../src/object/validate';

describe('isObject', () => {
  it('returns true for plain objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
  });

  it('returns false for arrays', () => {
    expect(isObject([])).toBe(false);
  });

  it('returns false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('returns false for primitives', () => {
    expect(isObject(123)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });

  it('returns false for objects with different prototypes', () => {
    class Custom {}
    expect(isObject(new Custom())).toBe(false);
  });
});

describe('isEmptyObject', () => {
  it('returns true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  it('returns false for a non-empty object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  it('returns false for arrays', () => {
    expect(isEmptyObject([])).toBe(false);
  });
});

describe('isNonEmptyObject', () => {
  it('returns true for a non-empty object', () => {
    expect(isNonEmptyObject({ a: 1 })).toBe(true);
  });

  it('returns false for an empty object', () => {
    expect(isNonEmptyObject({})).toBe(false);
  });

  it('returns false for arrays', () => {
    expect(isNonEmptyObject([])).toBe(false);
  });
});
