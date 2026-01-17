import { splitString } from './splitString';

/**
 * Counts characters in a string.
 *
 * @remarks
 * - If `char` is provided, only that character’s occurrences are counted.
 * - If `char` is omitted, the function counts the number of substrings returned by {@link splitString} (similar to a word count).
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
  if (char) {
    return [...str].filter((c) => c === char).length;
  }

  return splitString(str).length;
}
