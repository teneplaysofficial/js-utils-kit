import { KEBAB_CASE_REGEX } from '@js-utils-kit/regex';

/**
 * Checks if a string is in kebab-case format.
 *
 * A valid kebab-case string:
 * - Contains only lowercase letters and numbers
 * - Words are separated by single hyphens (`-`)
 * - Does not start or end with a hyphen
 * - Does not contain consecutive hyphens
 *
 * @returns True if the string is kebab-case.
 *
 * @example
 * ```ts
 * isKebabCase("hello-world") // true
 * isKebabCase("hello-world-123") // true
 * ```
 *
 * ```ts
 * isKebabCase("Hello-world") // false
 * isKebabCase("hello_world") // false
 * isKebabCase("-hello-world") // false
 * isKebabCase("hello-world-") // false
 * isKebabCase("hello--world") // false
 * ```
 */
export function isKebabCase(
  /** The input string */
  value: string,
): boolean {
  return KEBAB_CASE_REGEX.test(value);
}
