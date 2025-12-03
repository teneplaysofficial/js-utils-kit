/**
 * Checks if a number is odd.
 *
 * @returns True if the number is odd, false otherwise.
 *
 * @example
 * ```ts
 * isOdd(3); // true
 * isOdd(4); // false
 * ```
 */
export function isOdd(
  /** The number to check */
  value: number,
): boolean {
  return value % 2 !== 0;
}
