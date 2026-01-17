/**
 * Checks if a string contains only lowercase letters.
 *
 * @returns True if all letters are lowercase.
 *
 * @example
 * ```ts
 * isLowerCase("hello") // true
 * isLowerCase("Hello") // false
 * ```
 */
export function isLowerCase(
  /** The input string */
  value: string,
): boolean {
  return /^[a-z]+$/.test(value);
}
