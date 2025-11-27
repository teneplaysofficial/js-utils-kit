/**
 * Checks if a string contains only alphabetic characters (A–Z, a–z).
 *
 * @param value - The string to check.
 * @returns - `true` if the string contains only letters; otherwise, `false`.
 *
 * @example
 * ```ts
 * isAlphabetic("Hello"); // true
 * isAlphabetic("world123"); // false
 * isAlphabetic("Test!"); // false
 * ```
 */
export function isAlphabetic(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value);
}
