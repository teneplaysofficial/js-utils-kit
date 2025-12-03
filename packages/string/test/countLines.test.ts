import { expect, it } from 'vitest';
import { countLines } from '../src/countLines';

it('should count lines separated by \\n', () => {
  expect(countLines('a\nb\nc')).toBe(3);
});

it('should count lines separated by \\r\\n', () => {
  expect(countLines('a\r\nb\r\nc')).toBe(3);
});

it('should count single line', () => {
  expect(countLines('hello')).toBe(1);
});

it('counts trailing empty line from final newline', () => {
  expect(countLines('a\nb\n')).toBe(3);
});

it('returns 0 for empty string (if chosen semantics)', () => {
  expect(countLines('')).toBe(0);
});
