/**
 * Returns an array of unique characters from a string.
 *
 * @remarks
 * - Preserves order of first appearance.
 *
 * @returns Array of unique characters.
 *
 * @example
 * ```ts
 * uniqueChars("banana"); // ["b", "a", "n"]
 * uniqueChars("");       // []
 * ```
 */
export function uniqueChars(
  /** The input string. */
  str: string,
): string[] {
  return [...new Set(str)];
}
