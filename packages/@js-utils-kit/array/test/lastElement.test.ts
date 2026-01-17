import { it, expect } from 'vitest';
import { lastElement } from '../src';

it('returns the last element of an array', () => {
  expect(lastElement([1, 2, 3])).toBe(3);
});

it('returns undefined for an empty array', () => {
  expect(lastElement([])).toBeUndefined();
});

it('returns the only element for a single-element array', () => {
  expect(lastElement(['only'])).toBe('only');
});

it('works with different types', () => {
  expect(lastElement([true, false])).toBe(false);
  expect(lastElement(['a', 'b', 'c'])).toBe('c');
});

it('returns undefined when the array contains only undefined values', () => {
  expect(lastElement([undefined, undefined])).toBeUndefined();
});

it('does not mutate the original array', () => {
  const input = [1, 2, 3];
  const copy = [...input];

  lastElement(input);

  expect(input).toEqual(copy);
});

it('works with readonly arrays', () => {
  const input = [1, 2, 3] as const;

  expect(lastElement(input)).toBe(3);
});

it('handles arrays of objects correctly', () => {
  const a = { id: 1 };
  const b = { id: 2 };

  expect(lastElement([a, b])).toBe(b);
});

it('returns null if the last element is null', () => {
  expect(lastElement([1, null])).toBeNull();
});
