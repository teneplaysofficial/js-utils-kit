import { expect, it } from 'vitest';
import { shortestWord } from '../src/shortestWord';

it('returns the shortest word when unique', () => {
  expect(shortestWord('js utils kit')).toBe('js');
});

it('handles multiple spaces', () => {
  expect(shortestWord('a    bb   ccc')).toBe('a');
});

it('returns the only word', () => {
  expect(shortestWord('hello')).toBe('hello');
});

it('returns empty string for empty input', () => {
  expect(shortestWord('')).toBe('');
});

it('ignores symbols when determining length', () => {
  expect(shortestWord('hi!! wow?? ok')).toEqual(['hi', 'ok']);
});

it('returns array of words if multiple share shortest length', () => {
  expect(shortestWord('dog cat')).toEqual(['dog', 'cat']);
});

it('returns array of three words if all same length', () => {
  expect(shortestWord('dog cat bat')).toEqual(['dog', 'cat', 'bat']);
});

it('returns a single word if all ties are the same', () => {
  expect(shortestWord('dog dog')).toBe('dog');
});

it('returns an array if multiple unique words share shortest length', () => {
  expect(shortestWord('dog cat')).toEqual(['dog', 'cat']);
});
