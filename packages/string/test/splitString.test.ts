import { expect, it } from 'vitest';
import { splitString } from '../src/splitString';

it('should split by whitespace', () => {
  expect(splitString('a b  c')).toEqual(['a', 'b', 'c']);
});

it('should split by custom string delimiter', () => {
  expect(splitString('a,b,c', ',')).toEqual(['a', 'b', 'c']);
});

it('should split by regex delimiter', () => {
  expect(splitString('a1b2c3', /\d/)).toEqual(['a', 'b', 'c', '']);
});

it('does not trim by default; retains empty tokens at edges', () => {
  expect(splitString('  a b  ')).toEqual(['', 'a', 'b', '']);
});
