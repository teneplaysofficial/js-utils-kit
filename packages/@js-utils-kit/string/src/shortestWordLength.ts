import { splitString } from './splitString';
import { stripSymbols } from './stripSymbols';

/**
 * Finds the length of the shortest word in a string.
 *
 * @remarks
 * - Words are split by whitespace (`/\s+/`).
 * - Symbols (punctuation, special chars) are removed using {@link stripSymbols}.
 * - Returns `0` if the string is empty or contains no words.
 *
 * @returns Length of the shortest word.
 *
 * @example
 * ```ts
 * shortestWordLength("js utils kit"); // 2
 * shortestWordLength("one three five"); // 3
 * shortestWordLength(""); // 0
 * ```
 */
export function shortestWordLength(
  /** The input string. */
  str: string,
): number {
  const words = splitString(str.trim())
    .map((a) => stripSymbols(a))
    .filter(Boolean);
  if (words.length === 0) return 0;
  return words.reduce((min, w) => Math.min(min, w.length), Infinity);
}
