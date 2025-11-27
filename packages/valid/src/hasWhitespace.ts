/**
 * Checks if a string contains any whitespace.
 *
 * @returns True if the string contains whitespace.
 *
 * @example
 * ```ts
 * hasWhitespace("Hello world") // true
 * hasWhitespace("Nowordspace") // false
 * ```
 */
export function hasWhitespace(
  /** The string to check */
  value: string,
): boolean {
  return /\s/.test(value);
}
