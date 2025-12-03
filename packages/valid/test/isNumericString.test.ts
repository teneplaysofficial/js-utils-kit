import { expect, it } from 'vitest';
import { isNumericString } from '../src/isNumericString';

it('validates numeric strings including decimals and scientific notation', () => {
  expect(isNumericString('42')).toBe(true);
  expect(isNumericString('3.14')).toBe(true);
  expect(isNumericString('1e3')).toBe(true);
  expect(isNumericString('abc')).toBe(false);
});
