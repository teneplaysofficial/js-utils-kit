import { expect, it } from 'vitest';
import { uppercase } from '../src';

it('uppercase returns 26 uppercase letters', () => {
  const result = uppercase();
  expect(result).toHaveLength(26);
  expect(result[0]).toBe('A');
  expect(result[25]).toBe('Z');
});
