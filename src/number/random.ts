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

/**
 * Returns a random floating-point number between `min` and `max`.
 *
 * @param min - Minimum value (inclusive).
 * @param max - Maximum value (exclusive).
 * @returns A random float between min and max.
 *
 * @example
 * randomFloat(0, 1); // 0.624...
 * randomFloat(1.5, 5.2); // 3.1415...
 */
export function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
