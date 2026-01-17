/**
 * Checks if a string contains only uppercase letters.
 *
 * @returns True if all letters are uppercase.
 *
 * @example
 * ```ts
 * isUpperCase("HELLO") // true
 * isUpperCase("Hello") // false
 * ```
 */
export function isUpperCase(
  /** The input string */
  value: string,
): boolean {
  return /^[A-Z]+$/.test(value);
}
