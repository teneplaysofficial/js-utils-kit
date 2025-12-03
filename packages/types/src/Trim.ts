/**
 * Trims whitespace from a string with methods for leading and trailing and normalizing whitespace.
 */
export interface Trim {
  /**
   * Removes whitespace from both ends of a string.
   *
   * @param str - The string to trim.
   * @returns The trimmed string.
   */
  (str: string): string;

  /**
   * Removes leading whitespace from a string.
   *
   * @param str - The string to trim.
   * @returns The string with leading whitespace removed.
   */
  start(str: string): string;

  /**
   * Removes trailing whitespace from a string.
   *
   * @param str - The string to trim.
   * @returns The string with trailing whitespace removed.
   */
  end(str: string): string;

  /**
   * Trims the string and replaces sequences of whitespace with a single space.
   *
   * @param str - The string to normalize.
   * @returns The string with normalized whitespace.
   */
  normalizeWhitespace(str: string): string;
}
