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
