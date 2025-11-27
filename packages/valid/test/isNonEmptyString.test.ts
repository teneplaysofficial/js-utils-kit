import { expect, it } from 'vitest';
import { isNonEmptyString } from '../src/isNonEmptyString';

it('checks non-empty strings with and without trim', () => {
  expect(isNonEmptyString('hello')).toBe(true);
  expect(isNonEmptyString('   ')).toBe(false);
  expect(isNonEmptyString('   ', false)).toBe(true);
});

it('returns false for non-strings', () => {
  expect(isNonEmptyString(null)).toBe(false);
  expect(isNonEmptyString([])).toBe(false);
});
