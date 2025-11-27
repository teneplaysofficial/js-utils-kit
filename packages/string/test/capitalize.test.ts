import { expect, it } from 'vitest';
import { capitalize } from '../src/capitalize';

it('capitalizes the first lowercase letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

it('leaves already-capitalized strings unchanged', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

it('handles a single character', () => {
  expect(capitalize('h')).toBe('H');
  expect(capitalize('H')).toBe('H');
});

it('handles strings starting with a number (unchanged)', () => {
  expect(capitalize('1hello')).toBe('1hello');
});

it('capitalizes first alphabet character even with symbols', () => {
  expect(capitalize('_hello')).toBe('_hello');
  expect(capitalize('!hello')).toBe('!hello');
});

it('handles empty string', () => {
  expect(capitalize('')).toBe('');
});

it('handles strings with leading spaces', () => {
  expect(capitalize(' hello')).toBe(' hello');
});
