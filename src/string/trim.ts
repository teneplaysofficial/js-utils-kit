/**
 * String trimming utilities.
 * Trims whitespace from a string (both sides by default) with methods for leading and trailing and normalizing whitespace.
 * @param str - The string to trim.
 * @returns The string with leading and trailing whitespace removed.
 * @example
 * ```ts
 * // Trim both sides
 * console.log(trim("  hello  ")); // "hello"
 * console.log(trim("")); // ""
 * console.log(trim("hello")); // "hello"
 *
 * // Trim leading whitespace
 * console.log(trim.start("  hello  ")); // "hello  "
 * console.log(trim.start("")); // ""
 * console.log(trim.start("hello")); // "hello"
 *
 * // Trim trailing whitespace
 * console.log(trim.end("  hello  ")); // "  hello"
 * console.log(trim.end("")); // ""
 * console.log(trim.end("hello")); // "hello"
 *
 * // Normalize whitespace
 * console.log(trim.normalizeWhitespace("  hello   world  ")); // "hello world"
 * console.log(trim.normalizeWhitespace("hello\t  world")); // "hello world"
 * console.log(trim.normalizeWhitespace("")); // ""
 * ```
 */
export const trim = {
  function(str: string) {
    return str.trim();
  },
  start: (str: string) => {
    return str.trimStart();
  },
  end: (str: string) => {
    return str.trimEnd();
  },
  normalizeWhitespace: (str: string) => {
    return str.trim().replace(/\s+/g, ' ');
  },
};
