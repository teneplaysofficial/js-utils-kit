/**
 * Checks if a string contains only uppercase letters.
 * @param value - The input string.
 * @returns True if all letters are uppercase.
 * @example
 * ```ts
 * isUpperCase("HELLO") // true
 * isUpperCase("Hello") // false
 * ```
 */
export function isUpperCase(value: string): boolean {
  return /^[A-Z]+$/.test(value);
}
