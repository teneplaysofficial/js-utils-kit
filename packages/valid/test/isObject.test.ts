import { expect, it } from 'vitest';
import { isObject } from '../src';

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
