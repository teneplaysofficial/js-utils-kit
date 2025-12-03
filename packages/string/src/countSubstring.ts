import { splitString } from './splitString';

/**
 * Counts how many times a substring occurs within a string.
 *
 * @remarks
 * - Overlapping substrings are not double-counted.
 * - Returns `0` if the substring is not found.
 *
 * @returns Number of times `sub` occurs in `str`.
 *
 * @example
 * ```ts
 * countSubstring("lololol", "lo"); // 3
 * countSubstring("aaaaa", "a");    // 5
 * countSubstring("hello", "z");    // 0
 * ```
 */
export function countSubstring(
  /** The input string. */
  str: string,
  /** The substring to count. */
  sub: string,
): number {
  if (sub.length === 0) return 0;
  return splitString(str, sub).length - 1;
}
