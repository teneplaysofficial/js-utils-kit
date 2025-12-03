/**
 * Returns a random integer between `min` and `max`, inclusive.
 *
 * @returns A random integer between min and max.
 *
 * @example
 * ```ts
 * randomInt(1, 5); // 3
 * randomInt(10, 20); // 17
 * ```
 */
export function randomInt(
  /** Minimum value */
  min: number,
  /** Maximum value */
  max: number,
): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
