/**
 * Checks if a string is in camelCase format.
 *
 * @returns True if the string is camelCase.
 *
 * @example
 * ```ts
 * isCamelCase("helloWorld") // true
 * isCamelCase("HelloWorld") // false
 * ```
 */
export function isCamelCase(
  /** The input string */
  value: string,
): boolean {
  return /^[a-z][a-zA-Z0-9]*$/.test(value);
}
