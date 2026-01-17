import { expect, it } from 'vitest';
import { freeMemory, PROCESS_MEMORY_USAGE, totalMemory } from '../src';

it('should return total system memory', () => {
  expect(totalMemory).toBeTypeOf('number');
  expect(totalMemory).toBeGreaterThan(0);
});

it('should return free system memory', () => {
  expect(freeMemory).toBeTypeOf('number');
  expect(freeMemory).toBeGreaterThan(0);
});

it('should return process memory usage object', () => {
  expect(PROCESS_MEMORY_USAGE).toBeTypeOf('object');
  expect(PROCESS_MEMORY_USAGE).toHaveProperty('rss');
});
