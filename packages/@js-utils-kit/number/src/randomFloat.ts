/**
 * Returns a random floating-point number between `min` and `max`.
 *
 * @returns A random float between min and max.
 *
 * @example
 * ```ts
 * randomFloat(0, 1); // 0.624...
 * randomFloat(1.5, 5.2); // 3.1415...
 * ```
 */
export function randomFloat(
  /** Minimum value */
  min: number,
  /** Maximum value */
  max: number,
): number {
  return Math.random() * (max - min) + min;
}
