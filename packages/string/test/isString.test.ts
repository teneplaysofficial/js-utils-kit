import { expect, it } from 'vitest';
import { isString } from '../src/isString';

it('validates strings correctly', () => {
  expect(isString('text')).toBe(true);
  expect(isString(123)).toBe(false);
});
