/**
 * Checks if a string is in kebab-case format.
 *
 * @returns True if the string is kebab-case.
 *
 * @example
 * ```ts
 * isKebabCase("hello-world") // true
 * isKebabCase("hello_world") // false
 * ```
 */
export function isKebabCase(
  /** The input string */
  value: string,
): boolean {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(value);
}
