import { expect, it } from 'vitest';
import { isDefined } from '../src';

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
