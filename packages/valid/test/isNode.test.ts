import { expect, it } from 'vitest';
import { isNode } from '../src/isNode';

it('returns true in a Node.js environment', () => {
  expect(isNode()).toBe(true);
});
