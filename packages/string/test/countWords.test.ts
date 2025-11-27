import { expect, it } from 'vitest';
import { countWords } from '../src/countWords';

it('should count words separated by spaces', () => {
  expect(countWords('js utils kit')).toBe(3);
});

it('should ignore multiple spaces', () => {
  expect(countWords('js    utils         kit')).toBe(3);
});

it('should handle leading/trailing spaces', () => {
  expect(countWords('   js utils kit   ')).toBe(3);
});
