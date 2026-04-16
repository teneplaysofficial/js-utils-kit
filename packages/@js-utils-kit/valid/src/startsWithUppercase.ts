import { STARTS_WITH_UPPERCASE_REGEX } from '@js-utils-kit/regex';

/**
 * Checks if a string starts with an uppercase letter.
 *
 * @returns True if the first character is uppercase, false otherwise.
 *
 * @example
 * ```ts
 * startsWithUppercase('Hello') // true
 * startsWithUppercase('world') // false
 * ```
 */
export function startsWithUppercase(
  /** The input string to check */
  value: string,
): boolean {
  return STARTS_WITH_UPPERCASE_REGEX.test(value);
}
