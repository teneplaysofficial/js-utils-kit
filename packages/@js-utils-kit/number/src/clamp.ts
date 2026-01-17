/**
 * Clamps a number between a minimum and maximum value.
 *
 * Ensures that the returned number is not less than `min` and not more than `max`.
 *
 * @returns The clamped number.
 *
 * @example
 * ```ts
 * clamp(5, 1, 10); // 5
 * clamp(0, 1, 10); // 1
 * clamp(15, 1, 10); // 10
 * ```
 */
export function clamp(
  /** The number to clamp */
  value: number,
  /** The minimum allowed value */
  min: number,
  /** The maximum allowed value */
  max: number,
): number {
  return Math.min(Math.max(value, min), max);
}
