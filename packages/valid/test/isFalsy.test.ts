import { it, expect } from 'vitest';
import { isFalsy } from '../src';

it('returns true for false', () => {
  expect(isFalsy(false)).toBe(true);
});

it('returns true for zero', () => {
  expect(isFalsy(0)).toBe(true);
  expect(isFalsy(-0)).toBe(true);
});

it('returns true for empty string', () => {
  expect(isFalsy('')).toBe(true);
});

it('returns true for null and undefined', () => {
  expect(isFalsy(null)).toBe(true);
  expect(isFalsy(undefined)).toBe(true);
});

it('returns true for NaN', () => {
  expect(isFalsy(NaN)).toBe(true);
  // sanity check
  expect(Number.isNaN(NaN)).toBe(true);
});

it('returns false for truthy numbers', () => {
  expect(isFalsy(1)).toBe(false);
  expect(isFalsy(-1)).toBe(false);
  expect(isFalsy(42)).toBe(false);
});

it('returns false for non-empty strings', () => {
  expect(isFalsy('hello')).toBe(false);
  expect(isFalsy(' ')).toBe(false); // whitespace is truthy
});

it('returns false for arrays', () => {
  expect(isFalsy([])).toBe(false);
  expect(isFalsy([0])).toBe(false);
});

it('returns false for objects', () => {
  expect(isFalsy({})).toBe(false);
  expect(isFalsy({ a: 1 })).toBe(false);
});

it('returns false for functions', () => {
  expect(isFalsy(() => {})).toBe(false);
});

it('returns false for symbols', () => {
  expect(isFalsy(Symbol('test'))).toBe(false);
});

it('returns false for BigInt values', () => {
  expect(isFalsy(1n)).toBe(false);
});
