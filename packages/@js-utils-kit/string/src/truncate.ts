/**
 * Truncates a string to a specified length, appending a suffix if the string is too long.
 *
 * @returns The truncated string with the suffix if the original string exceeds the length, otherwise the original string.
 *
 * @example
 * ```ts
 * console.log(truncate("hello world", 8)); // "hello..."
 * console.log(truncate("hi", 5)); // "hi"
 * console.log(truncate("hello", 5, "...")); // "hello"
 * console.log(truncate("", 3)); // ""
 * ```
 */
export function truncate(
  /** The string to truncate */
  str: string,
  /** The maximum length of the resulting string */
  length: number,
  /**
   * The suffix to append if truncation occurs
   *
   * @default "..."
   */
  suffix: string = '...',
): string {
  if (length <= 0) return '';
  if (str.length <= length) return str;
  if (suffix.length >= length) return suffix.slice(0, length);

  return str.trim().slice(0, length) + suffix;
}
