import { expect, it } from 'vitest';
import { endsWithPunctuation } from '../src';

it('returns true if string ends with punctuation', () => {
  expect(endsWithPunctuation('Hello.')).toBe(true);
  expect(endsWithPunctuation('What?')).toBe(true);
  expect(endsWithPunctuation('Wow!')).toBe(true);
});

it('returns false if string does not end with punctuation', () => {
  expect(endsWithPunctuation('Hello')).toBe(false);
  expect(endsWithPunctuation('Hi there')).toBe(false);
});
