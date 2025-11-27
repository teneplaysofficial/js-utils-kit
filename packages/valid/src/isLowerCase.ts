/**
 * Checks if a string contains only lowercase letters.
 * @param value - The input string.
 * @returns True if all letters are lowercase.
 * @example
 * ```ts
 * isLowerCase("hello") // true
 * isLowerCase("Hello") // false
 * ```
 */
export function isLowerCase(value: string): boolean {
  return /^[a-z]+$/.test(value);
}
