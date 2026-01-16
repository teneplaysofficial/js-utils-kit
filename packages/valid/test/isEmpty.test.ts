import { it, expect } from 'vitest';
import { isEmpty } from '../src';

it('returns true for null and undefined', () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
});

it('returns true for empty strings', () => {
  expect(isEmpty('')).toBe(true);
});

it('returns true for whitespace-only strings', () => {
  expect(isEmpty(' ')).toBe(true);
  expect(isEmpty('   ')).toBe(true);
  expect(isEmpty('\n\t')).toBe(true);
});

it('returns false for non-empty strings', () => {
  expect(isEmpty('hello')).toBe(false);
  expect(isEmpty('  hello  ')).toBe(false);
});

it('returns true for empty arrays', () => {
  expect(isEmpty([])).toBe(true);
});

it('returns false for non-empty arrays', () => {
  expect(isEmpty([1])).toBe(false);
  expect(isEmpty([0])).toBe(false);
  expect(isEmpty([''])).toBe(false);
});

it('returns true for empty objects', () => {
  expect(isEmpty({})).toBe(true);
});

it('returns false for objects with properties', () => {
  expect(isEmpty({ a: 1 })).toBe(false);
  expect(isEmpty({ a: undefined })).toBe(false);
});

it('returns true for empty Map and Set', () => {
  expect(isEmpty(new Map())).toBe(true);
  expect(isEmpty(new Set())).toBe(true);
});

it('returns false for non-empty Map and Set', () => {
  const map = new Map();
  map.set('key', 'value');

  const set = new Set();
  set.add(1);

  expect(isEmpty(map)).toBe(false);
  expect(isEmpty(set)).toBe(false);
});

it('returns false for numbers and booleans', () => {
  expect(isEmpty(0)).toBe(false);
  expect(isEmpty(1)).toBe(false);
  expect(isEmpty(false)).toBe(false);
  expect(isEmpty(true)).toBe(false);
});

it('returns false for functions', () => {
  expect(isEmpty(() => {})).toBe(false);
});

it('returns false for dates', () => {
  expect(isEmpty(new Date())).toBe(false);
});
