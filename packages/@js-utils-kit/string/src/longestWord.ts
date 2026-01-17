import { splitString } from './splitString';
import { stripSymbols } from './stripSymbols';

/**
 * Finds the longest word(s) in a string.
 *
 * @remarks
 * - If only one longest word exists, returns it as a string.
 * - If multiple longest words have the same length, returns them as an array.
 * - Returns an empty string if there are no words.
 *
 * @returns The longest word as a string, or an array of tied words.
 *
 * @example
 * ```ts
 * longestWord("js utils kit");              // "utils"
 * longestWord("short   longerword   mid"); // "longerword"
 * longestWord("hello");                    // "hello"
 * longestWord("");                         // ""
 * ```
 */
export function longestWord(
  /** The input string. */
  str: string,
): string | string[] {
  const words = splitString(str.trim())
    .map((a) => stripSymbols(a))
    .filter(Boolean);
  if (words.length === 0) return '';

  const maxLen = Math.max(...words.map((w) => w.length));
  const longest = words.filter((w) => w.length === maxLen);

  const unique = [...new Set(longest)];

  return unique.length === 1 ? unique[0] : unique;
}
