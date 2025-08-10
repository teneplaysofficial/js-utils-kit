/**
 * Capitalizes the first character of a string using a regular expression.
 *
 * @param value - The string to capitalize.
 *
 * @returns The input string with its first character capitalized, or the original string if empty or not a string.
 *
 * @example
 * ```ts
 * capitalize("hello"); // "Hello"
 * capitalize("world"); // "World"
 * capitalize(""); // ""
 * capitalize("a"); // "A"
 * ```
 */
export function capitalize(value: string): string {
  // value.charAt(0).toUpperCase + value.slice(1)
  return value.replace(/^\w/, (c) => c.toUpperCase());
}
