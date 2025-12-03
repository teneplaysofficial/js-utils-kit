/**
 * Checks if a number is even.
 *
 * @returns True if the number is even, false otherwise.
 *
 * @example
 * ```ts
 * isEven(4); // true
 * isEven(3); // false
 * ```
 */
export function isEven(
  /** The number to check */
  value: number,
): boolean {
  return value % 2 === 0;
}
