import { it, expect } from 'vitest';
import { unique } from '../src';

it('removes duplicate primitive values while preserving order', () => {
  expect(unique([3, 1, 2, 1])).toEqual([3, 1, 2]);
});

it('returns a new array (does not mutate the original)', () => {
  const input = [1, 2, 2, 3];
  const copy = [...input];

  const result = unique(input);

  expect(result).toEqual([1, 2, 3]);
  expect(input).toEqual(copy);
  expect(result).not.toBe(input);
});

it('sorts unique values when sort is true', () => {
  expect(unique([3, 1, 2, 1], { sort: true })).toEqual([1, 2, 3]);
});

it('uses a custom compare function when provided', () => {
  const users = [
    { id: 3, name: 'Charlie' },
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' },
  ];

  const result = unique(users, {
    sort: true,
    compareFn: (a, b) => a.id - b.id,
  });

  expect(result).toEqual([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ]);
});

it('does not sort when sort is false even if compareFn is provided', () => {
  expect(
    unique([3, 1, 2, 1], {
      sort: false,
      compareFn: (a, b) => a - b,
    }),
  ).toEqual([3, 1, 2]);
});

it('uses reference equality for objects (Set semantics)', () => {
  const a = { id: 1 };
  const b = { id: 1 };

  expect(unique([a, a, b])).toEqual([a, b]);
});

it('works with readonly arrays', () => {
  const input = [1, 2, 2, 3] as const;

  expect(unique(input)).toEqual([1, 2, 3]);
});

it('handles empty arrays', () => {
  expect(unique([])).toEqual([]);
});

it('handles arrays with a single element', () => {
  expect(unique([42])).toEqual([42]);
});

it('preserves insertion order when sort is disabled', () => {
  expect(unique(['b', 'a', 'b', 'c'])).toEqual(['b', 'a', 'c']);
});
