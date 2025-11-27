/**
 * Checks if a string ends with any Unicode punctuation character.
 *
 * @param value - The string to check.
 * @returns True if the string ends with a punctuation character.
 * @example
 * ```ts
 * endsWithPunctuation("Hi!") // true
 * endsWithPunctuation("Hello—") // true
 * endsWithPunctuation("Okay") // false
 * ```
 */
export function endsWithPunctuation(value: string): boolean {
  return /[\p{P}]$/u.test(value);
}
