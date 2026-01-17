import { expect, it } from 'vitest';
import { isString } from '../src';

it('validates strings correctly', () => {
  expect(isString('text')).toBe(true);
  expect(isString(123)).toBe(false);
});
