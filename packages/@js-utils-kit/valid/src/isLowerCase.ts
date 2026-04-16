import { LOWERCASE_ALPHA_REGEX } from '@js-utils-kit/regex';

/**
 * Checks if a string contains only lowercase letters.
 *
 * @returns True if all letters are lowercase.
 *
 * @example
 * ```ts
 * isLowerCase("hello") // true
 * isLowerCase("Hello") // false
 * ```
 */
export function isLowerCase(
  /** The input string */
  value: string,
): boolean {
  return LOWERCASE_ALPHA_REGEX.test(value);
}
