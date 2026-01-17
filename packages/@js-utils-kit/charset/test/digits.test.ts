import { expect, it } from 'vitest';
import { digits } from '../src';

it('digits returns 10 numeric characters', () => {
  const result = digits();
  expect(result).toHaveLength(10);
  expect(result[0]).toBe('0');
  expect(result[9]).toBe('9');
});
