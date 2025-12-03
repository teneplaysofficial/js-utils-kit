/**
 * Checks if a string starts with an uppercase letter.
 *
 * @returns True if the first character is uppercase, false otherwise.
 *
 * @example
 * ```ts
 * startsWithUppercase('Hello') // true
 * startsWithUppercase('world') // false
 * ```
 */
export function startsWithUppercase(
  /** The input string to check */
  value: string,
): boolean {
  return /^[A-Z]/.test(value);
}
