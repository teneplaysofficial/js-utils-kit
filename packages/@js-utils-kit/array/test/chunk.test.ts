import { it, expect } from 'vitest';
import { chunk } from '../src';

it('splits an array into equal-sized chunks', () => {
  expect(chunk([1, 2, 3, 4], 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

it('creates a smaller last chunk if array length is not divisible by size', () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

it('returns each element as its own chunk when size is 1', () => {
  expect(chunk(['a', 'b', 'c'], 1)).toEqual([['a'], ['b'], ['c']]);
});

it('returns the entire array as a single chunk when size is greater than array length', () => {
  expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]]);
});

it('uses a default chunk size of 1', () => {
  expect(chunk([true, false])).toEqual([[true], [false]]);
});

it('returns an empty array when input array is empty', () => {
  expect(chunk([], 3)).toEqual([]);
});

it('does not mutate the original array', () => {
  const input = [1, 2, 3, 4];
  const copy = [...input];

  chunk(input, 2);

  expect(input).toEqual(copy);
});

it('throws a RangeError when size is 0', () => {
  expect(() => chunk([1, 2, 3], 0)).toThrow(RangeError);
});

it('throws a RangeError when size is negative', () => {
  expect(() => chunk([1, 2, 3], -1)).toThrow('chunk size must be greater than 0');
});

it('works with readonly arrays', () => {
  const input = [1, 2, 3, 4] as const;
  expect(chunk(input, 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

it('handles arrays of objects correctly', () => {
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }];

  expect(chunk(data, 2)).toEqual([[{ id: 1 }, { id: 2 }], [{ id: 3 }]]);
});
