import { expect, it } from 'vitest';
import { isAlphabetic } from '../src/isAlphabetic';

it('validates alphabetic strings', () => {
  expect(isAlphabetic('Test')).toBe(true);
  expect(isAlphabetic('123')).toBe(false);
});
