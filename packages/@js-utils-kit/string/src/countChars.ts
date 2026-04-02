/**
 * Counts characters in a string.
 *
 * @remarks
 * - If `char` is provided, only that character’s occurrences are counted.
 * - If `char` is omitted, counts total characters in the string.
 * - All characters are included in the count:
 *   - spaces
 *   - tabs (`\t`)
 *   - newlines (`\n`)
 *   - unicode characters (emoji, symbols, etc.)
 * - Internally uses {@link splitString}.
 *
 * @returns Number of characters or character occurrences.
 *
 * @example
 * ```ts
 * countChars("banana");       // 6
 * countChars("banana", "a");  // 3
 * countChars("banana", "n");  // 2
 * ```
 */
export function countChars(
  /** The input string. */
  str: string,
  /** Optional character to count. */
  char?: string,
): number {
  const chars = Array.from(str);

  if (char) {
    return chars.filter((c) => c === char).length;
  }

  return chars.length;
}
