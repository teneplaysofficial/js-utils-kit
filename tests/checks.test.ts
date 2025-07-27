import { isDefined, isUndefinedOrNull } from '../src/checks';

describe('isDefined', () => {
  it('returns true for non-null/undefined values', () => {
    expect(isDefined(0)).toBe(true);
    expect(isDefined('')).toBe(true);
    expect(isDefined([])).toBe(true);
    expect(isDefined({})).toBe(true);
    expect(isDefined(false)).toBe(true);
  });

  it('returns false for null or undefined', () => {
    expect(isDefined(null)).toBe(false);
    expect(isDefined(undefined)).toBe(false);
  });
});

describe('isUndefinedOrNull', () => {
  it('returns true for null or undefined', () => {
    expect(isUndefinedOrNull(null)).toBe(true);
    expect(isUndefinedOrNull(undefined)).toBe(true);
  });

  it('returns false for other values', () => {
    expect(isUndefinedOrNull(0)).toBe(false);
    expect(isUndefinedOrNull('')).toBe(false);
    expect(isUndefinedOrNull([])).toBe(false);
    expect(isUndefinedOrNull({})).toBe(false);
    expect(isUndefinedOrNull(false)).toBe(false);
  });
});
