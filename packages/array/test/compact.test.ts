import { it, expect } from 'vitest';
import { compact } from '../src';

it('removes all falsy values from an array', () => {
  expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN])).toEqual([1, 2, 3]);
});

it('works with strings', () => {
  expect(compact(['a', '', 'b', undefined])).toEqual(['a', 'b']);
});

it('returns an empty array when all values are falsy', () => {
  expect(compact([0, false, '', null, undefined, NaN])).toEqual([]);
});

it('returns an empty array when input is empty', () => {
  expect(compact([])).toEqual([]);
});

it('does not remove truthy objects or arrays', () => {
  const obj = {};
  const arr: number[] = [];

  expect(compact([obj, arr, 1])).toEqual([obj, arr, 1]);
});

it('does not mutate the original array', () => {
  const input = [0, 1, false, 2];
  const copy = [...input];

  compact(input);

  expect(input).toEqual(copy);
});

it('works with readonly arrays', () => {
  const input = [0, 1, 2, false, 3] as const;

  expect(compact(input)).toEqual([1, 2, 3]);
});

it('preserves element order', () => {
  expect(compact([1, 0, 2, false, 3])).toEqual([1, 2, 3]);
});

it('narrows values at runtime (truthy filtering)', () => {
  const result = compact([0, 'a', '', 'b']);

  expect(result).toEqual(['a', 'b']);
});
