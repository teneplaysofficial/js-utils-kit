import { expect, it } from 'vitest';
import { getMilliseconds } from '../src';

it('returns 0 when no arguments are given', () => {
  expect(getMilliseconds()).toBe(0);
});

it('calculates milliseconds for days correctly', () => {
  expect(getMilliseconds(1)).toBe(86400000); // 1 day
  expect(getMilliseconds(2)).toBe(172800000); // 2 days
});

it('calculates milliseconds for hours correctly', () => {
  expect(getMilliseconds(0, 1)).toBe(3600000); // 1 hour
  expect(getMilliseconds(0, 23)).toBe(82800000); // 23 hours
});

it('calculates milliseconds for minutes correctly', () => {
  expect(getMilliseconds(0, 0, 1)).toBe(60000); // 1 minute
  expect(getMilliseconds(0, 0, 59)).toBe(3540000); // 59 minutes
});

it('calculates milliseconds for seconds correctly', () => {
  expect(getMilliseconds(0, 0, 0, 1)).toBe(1000); // 1 second
  expect(getMilliseconds(0, 0, 0, 59)).toBe(59000); // 59 seconds
});

it('combines days, hours, minutes, and seconds correctly', () => {
  const ms =
    1 * 86400000 + // 1 day
    2 * 3600000 + // 2 hours
    30 * 60000 + // 30 minutes
    45 * 1000; // 45 seconds

  expect(getMilliseconds(1, 2, 30, 45)).toBe(ms);
});

it('handles large days correctly', () => {
  expect(getMilliseconds(1000)).toBe(1000 * 86400000);
});

it('throws an error for negative values', () => {
  expect(() => getMilliseconds(-1)).toThrow('All time values must be non-negative numbers.');
});
