/**
 * Returns a random integer between `min` and `max`, inclusive.
 *
 * @param min - Minimum value (inclusive).
 * @param max - Maximum value (inclusive).
 * @returns A random integer between min and max.
 *
 * @example
 * randomInt(1, 5); // 3
 * randomInt(10, 20); // 17
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
