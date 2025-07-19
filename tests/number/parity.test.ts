import { isEven, isOdd } from '../../src/number/parity';

test('detect even numbers', () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
});

test('detect odd numbers', () => {
  expect(isOdd(2)).toBe(false);
  expect(isOdd(3)).toBe(true);
});
