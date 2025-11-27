/**
 * Checks if a string is in snake_case format.
 * @param value - The input string.
 * @returns True if the string is snake_case.
 * @example
 * ```ts
 * isSnakeCase("hello_world") // true
 * isSnakeCase("hello-world") // false
 * ```
 */
export function isSnakeCase(value: string): boolean {
  return /^[a-z0-9]+(_[a-z0-9]+)*$/.test(value);
}
