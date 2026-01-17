import { splitString } from './splitString';
import { stripSymbols } from './stripSymbols';

/**
 * Finds the shortest word(s) in a string.
 *
 * @remarks
 * - If only one shortest word exists, returns it as a string.
 * - If multiple shortest words have the same length, returns them as an array.
 * - Returns an empty string if there are no words.
 *
 * @returns The shortest word as a string, or an array of tied words.
 *
 * @example
 * ```ts
 * shortestWord("js utils kit"); // "js"
 * shortestWord("one three five"); // "one"
 * shortestWord("a ab abc abcd"); // "a"
 * shortestWord(""); // ""
 * ```
 */
export function shortestWord(
  /** The input string. */
  str: string,
): string | string[] {
  const words = splitString(str.trim())
    .map((a) => stripSymbols(a))
    .filter(Boolean);
  if (words.length === 0) return '';

  const minLen = Math.min(...words.map((w) => w.length));
  const shortest = words.filter((w) => w.length === minLen);

  const unique = [...new Set(shortest)];

  return unique.length === 1 ? unique[0] : unique;
}
