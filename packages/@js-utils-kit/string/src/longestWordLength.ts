import { splitString } from './splitString';
import { stripSymbols } from './stripSymbols';

/**
 * Finds the length of the longest word in a string.
 *
 * @remarks
 * - Words are split by whitespace (`/\s+/`).
 * - Symbols (punctuation, special chars) are removed using {@link stripSymbols}.
 * - Returns `0` if the string is empty or contains no words.
 *
 * @returns Length of the longest word.
 *
 * @example
 * ```ts
 * longestWordLength("js utils kit");              // 5
 * longestWordLength("short   longerword   mid"); // 10
 * longestWordLength("hello");                    // 5
 * longestWordLength("");                         // 0
 * ```
 */
export function longestWordLength(
  /** The input string. */
  str: string,
): number {
  const words = splitString(str)
    .map((a) => stripSymbols(a))
    .filter(Boolean);
  if (words.length === 0) return 0;

  return words.reduce((max, w) => Math.max(max, w.length), 0);
}
