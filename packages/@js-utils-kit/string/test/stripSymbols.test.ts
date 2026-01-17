import { expect, it } from 'vitest';
import { stripSymbols } from '../src';

it('removes symbols by default', () => {
  expect(stripSymbols('hello-world!')).toBe('helloworld');
});

it('replaces symbols with given replacement string', () => {
  expect(stripSymbols('hello-world!', ' ')).toBe('hello world ');
});

it('can insert underscores instead of removing', () => {
  expect(stripSymbols('user_name@test', '_')).toBe('user_name_test');
});

it('keeps spaces intact', () => {
  expect(stripSymbols('keep  spaces')).toBe('keep  spaces');
});

it('handles multiple symbols in sequence with replacement', () => {
  expect(stripSymbols('a!@#b', '*')).toBe('a***b');
});

it('returns empty string if only symbols are given', () => {
  expect(stripSymbols('!@#$%^&*')).toBe('');
});

it('returns empty string if input is empty', () => {
  expect(stripSymbols('')).toBe('');
});

it('replaces Unicode punctuation (em dash) too', () => {
  expect(stripSymbols('foo—bar', ' ')).toBe('foo bar');
});
