import { UPPERCASE_ALPHA_REGEX } from '@js-utils-kit/regex';

/**
 * Checks if a string contains only uppercase letters.
 *
 * @returns True if all letters are uppercase.
 *
 * @example
 * ```ts
 * isUpperCase("HELLO") // true
 * isUpperCase("Hello") // false
 * ```
 */
export function isUpperCase(
  /** The input string */
  value: string,
): boolean {
  return UPPERCASE_ALPHA_REGEX.test(value);
}
