import { expect, it } from 'vitest';
import { isArray } from '../src/isArray';

it('returns true for a non-null array', () => {
  expect(isArray([1, 2, 3])).toBe(true);
});

it('returns false for a string', () => {
  expect(isArray('hello')).toBe(false);
});

it('returns false for a number', () => {
  expect(isArray(123)).toBe(false);
});

it('returns false for an object', () => {
  expect(isArray({ a: 1 })).toBe(false);
});

it('returns false for null', () => {
  expect(isArray(null)).toBe(false);
});

it('returns false for undefined', () => {
  expect(isArray(undefined)).toBe(false);
});

it('returns false for a function', () => {
  expect(isArray(() => {})).toBe(false);
});
