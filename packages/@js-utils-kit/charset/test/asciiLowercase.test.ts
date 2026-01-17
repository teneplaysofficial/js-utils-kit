import { expect, it } from 'vitest';
import { lowercase } from '../src';

it('lowercase returns 26 lowercase letters', () => {
  const result = lowercase();
  expect(result).toHaveLength(26);
  expect(result[0]).toBe('a');
  expect(result[25]).toBe('z');
});
