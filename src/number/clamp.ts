/**
 * Clamps a number between a minimum and maximum value.
 *
 * Ensures that the returned number is not less than `min` and not more than `max`.
 *
 * @param value - The number to clamp.
 * @param min - The minimum allowed value.
 * @param max - The maximum allowed value.
 * @returns The clamped number.
 *
 * @example
 * clamp(5, 1, 10); // 5
 * clamp(0, 1, 10); // 1
 * clamp(15, 1, 10); // 10
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
