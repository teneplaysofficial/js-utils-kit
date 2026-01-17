import { splitString } from './splitString';

/**
 * Counts the number of lines in a string.
 *
 * @remarks
 * - Handles Unix (`\n`), Windows (`\r\n`), and old Mac (`\r`) line endings.
 *
 * @returns Number of lines in the string.
 *
 * @example
 * ```ts
 * countLines("a\nb\nc");     // 3
 * countLines("a\r\nb\r\nc"); // 3
 * countLines("hello");       // 1
 * ```
 */
export function countLines(
  /** The input string. */
  str: string,
): number {
  if (!str) return 0;

  return splitString(str, /\r\n|\r|\n/).length;
}
