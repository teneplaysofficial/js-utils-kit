import { expect, it } from 'vitest';
import { padRight } from '../src';

it('pads string on the right with spaces by default', () => {
  expect(padRight('hi', 5)).toBe('hi   ');
});

it('pads string on the right with custom char', () => {
  expect(padRight('hi', 5, '.')).toBe('hi...');
});

it('returns the same string if already long enough', () => {
  expect(padRight('hello', 2)).toBe('hello');
});
