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
  return /[\p{P}]$/u.test(value);
}
