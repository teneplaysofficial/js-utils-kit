/**
 * Checks if a string is in camelCase format.
 * @param value - The input string.
 * @returns True if the string is camelCase.
 * @example
 * ```ts
 * isCamelCase("helloWorld") // true
 * isCamelCase("HelloWorld") // false
 * ```
 */
export function isCamelCase(value: string): boolean {
  return /^[a-z][a-zA-Z0-9]*$/.test(value);
}
