import { expect, it } from 'vitest';
import { isUndefinedOrNull } from '../src/isUndefinedOrNull';

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
