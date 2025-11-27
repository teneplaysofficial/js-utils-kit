/**
 * Checks if a string is in PascalCase format.
 * @param value - The input string.
 * @returns True if the string is PascalCase.
 * @example
 * ```ts
 * isPascalCase("HelloWorld") // true
 * isPascalCase("helloWorld") // false
 * ```
 */
export function isPascalCase(value: string): boolean {
  return /^[A-Z][a-zA-Z0-9]*$/.test(value);
}
