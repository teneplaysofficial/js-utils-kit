import { ENDS_WITH_PUNCTUATION_REGEX } from '@js-utils-kit/regex';

/**
 * Checks if a string ends with any Unicode punctuation character.
 *
 * @returns True if the string ends with a punctuation character.
 *
 * @example
 * ```ts
 * endsWithPunctuation("Hi!") // true
 * endsWithPunctuation("Hello—") // true
 * endsWithPunctuation("Okay") // false
 * ```
 */
export function endsWithPunctuation(
  /** The string to check */
  value: string,
): boolean {
  return ENDS_WITH_PUNCTUATION_REGEX.test(value);
}
