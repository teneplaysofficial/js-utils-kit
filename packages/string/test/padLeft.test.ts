import { expect, it } from 'vitest';
import { padLeft } from '../src';

it('pads string on the left with spaces by default', () => {
  expect(padLeft('42', 5)).toBe('   42');
});

it('pads string on the left with custom char', () => {
  expect(padLeft('42', 5, '0')).toBe('00042');
});

it('returns the same string if already long enough', () => {
  expect(padLeft('hello', 3)).toBe('hello');
});
