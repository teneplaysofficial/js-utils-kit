import { expect, it } from 'vitest';
import { alphanumeric } from '../src';

it('all returns combined lowercase, uppercase, and digits', () => {
  const result = alphanumeric();
  expect(result).toHaveLength(62);
  expect(result).toContain('a');
  expect(result).toContain('Z');
  expect(result).toContain('5');
});
