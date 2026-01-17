import { expect, it } from 'vitest';
import { isEmptyObject } from '../src';

it('returns true for an empty object', () => {
  expect(isEmptyObject({})).toBe(true);
});

it('returns false for a non-empty object', () => {
  expect(isEmptyObject({ a: 1 })).toBe(false);
});

it('returns false for arrays', () => {
  expect(isEmptyObject([])).toBe(false);
});
