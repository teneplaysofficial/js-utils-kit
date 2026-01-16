import { it, expect } from 'vitest';
import { isTruthy } from '../src';

it('returns false for falsy primitives', () => {
  expect(isTruthy(false)).toBe(false);
  expect(isTruthy(0)).toBe(false);
  expect(isTruthy(0n)).toBe(false);
  expect(isTruthy('')).toBe(false);
  expect(isTruthy(null)).toBe(false);
  expect(isTruthy(undefined)).toBe(false);
});

it('returns false for NaN', () => {
  expect(isTruthy(NaN)).toBe(false);
  expect(Number.isNaN(NaN)).toBe(true);
});

it('returns true for truthy numbers', () => {
  expect(isTruthy(1)).toBe(true);
  expect(isTruthy(-1)).toBe(true);
  expect(isTruthy(42)).toBe(true);
});

it('returns true for non-empty strings', () => {
  expect(isTruthy('hello')).toBe(true);
  expect(isTruthy(' ')).toBe(true);
});

it('returns true for arrays', () => {
  expect(isTruthy([])).toBe(true);
  expect(isTruthy([0])).toBe(true);
});

it('returns true for objects', () => {
  expect(isTruthy({})).toBe(true);
  expect(isTruthy({ a: 1 })).toBe(true);
});

it('returns true for functions', () => {
  expect(isTruthy(() => {})).toBe(true);
});

it('returns true for symbols', () => {
  expect(isTruthy(Symbol('test'))).toBe(true);
});

it('returns true for BigInt values', () => {
  expect(isTruthy(1n)).toBe(true);
});

it('returns true for truthy exotic objects', () => {
  expect(isTruthy(new Date())).toBe(true);
  expect(isTruthy(new Map())).toBe(true);
  expect(isTruthy(new Set())).toBe(true);
});
