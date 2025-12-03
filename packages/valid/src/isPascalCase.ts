/**
 * Checks if a string is in PascalCase format.
 *
 * @returns True if the string is PascalCase.
 *
 * @example
 * ```ts
 * isPascalCase("HelloWorld") // true
 * isPascalCase("helloWorld") // false
 * ```
 */
export function isPascalCase(
  /** The input string */
  value: string,
): boolean {
  return /^[A-Z][a-zA-Z0-9]*$/.test(value);
}
