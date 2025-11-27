import { expect, it } from 'vitest';
import { isURL } from '../src/isURL';

it('validates URLs correctly', () => {
  expect(isURL('https://example.com')).toBe(true);
  expect(isURL('/relative')).toBe(false);
});
