import { expect, it } from 'vitest';
import { clamp } from '../src/clamp';

it('clamps number within range', () => {
  expect(clamp(5, 1, 10)).toBe(5);
  expect(clamp(0, 1, 10)).toBe(1);
  expect(clamp(15, 1, 10)).toBe(10);
});
