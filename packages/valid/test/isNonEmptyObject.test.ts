import { expect, it } from 'vitest';
import { isNonEmptyObject } from '../src/isNonEmptyObject';

it('returns true for a non-empty object', () => {
  expect(isNonEmptyObject({ a: 1 })).toBe(true);
});

it('returns false for an empty object', () => {
  expect(isNonEmptyObject({})).toBe(false);
});

it('returns false for arrays', () => {
  expect(isNonEmptyObject([])).toBe(false);
});
