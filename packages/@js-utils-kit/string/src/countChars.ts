import { splitString } from './splitString';

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
  if (char !== undefined && Array.from(char).length !== 1) {
    throw new Error('char must be a single Unicode code point');
  }

  if (char) {
    return Array.from(str).filter((c) => c === char).length;
  }

  return Array.from(str).length;
}