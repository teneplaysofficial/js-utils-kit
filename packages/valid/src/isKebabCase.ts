/**
 * Checks if a string is in kebab-case format.
 * @param value - The input string.
 * @returns True if the string is kebab-case.
 * @example
 * ```ts
 * isKebabCase("hello-world") // true
 * isKebabCase("hello_world") // false
 * ```
 */
export function isKebabCase(value: string): boolean {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(value);
}
