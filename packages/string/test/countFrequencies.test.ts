import { expect, it } from 'vitest';
import { countFrequencies } from '../src';

it('should count character frequencies', () => {
  expect(countFrequencies('banana')).toEqual({ b: 1, a: 3, n: 2 });
});

it('should return empty object for empty string', () => {
  expect(countFrequencies('')).toEqual({});
});
