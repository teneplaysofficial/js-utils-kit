/**
 * Checks if a string starts with an uppercase letter.
 * @param value - The input string to check.
 * @returns True if the first character is uppercase, false otherwise.
 * @example
 * ```ts
 * startsWithUppercase('Hello') // true
 * startsWithUppercase('world') // false
 * ```
 */
export function startsWithUppercase(value: string): boolean {
  return /^[A-Z]/.test(value);
}
