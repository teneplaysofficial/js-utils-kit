import { expect, it } from 'vitest';
import { repeatString } from '../src/repeatString';

it('repeats string n times', () => {
  expect(repeatString('ab', 3)).toBe('ababab');
});

it('returns empty string if count is 0', () => {
  expect(repeatString('ab', 0)).toBe('');
});

it('returns empty string if input is empty', () => {
  expect(repeatString('', 5)).toBe('');
});
