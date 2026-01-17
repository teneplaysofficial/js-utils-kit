/**
 * Checks if a string contains only alphabetic characters (A–Z, a–z).
 *
 * @returns - `true` if the string contains only letters; otherwise, `false`.
 *
 * @example
 * ```ts
 * isAlphabetic("Hello"); // true
 * isAlphabetic("world123"); // false
 * isAlphabetic("Test!"); // false
 * ```
 */
export function isAlphabetic(
  /** The string to check */
  value: string,
): boolean {
  return /^[a-zA-Z]+$/.test(value);
}
