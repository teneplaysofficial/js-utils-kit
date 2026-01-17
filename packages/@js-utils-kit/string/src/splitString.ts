/**
 * Splits a string into an array of substrings using a given delimiter.
 *
 * @remarks
 * - Defaults to splitting by whitespace using `/\s+/`.
 * - Does not trim leading/trailing spaces unless explicitly passed.
 * - Leading/trailing delimiters may produce empty strings.
 * - With `/\s+/` specifically, consecutive whitespace is collapsed (no interior empty tokens).
 *
 * @returns An array of substrings.
 *
 * @example
 * ```ts
 * splitString("a b  c");      // ["a", "b", "c"]
 * splitString("a,b,c", ",");  // ["a", "b", "c"]
 * splitString("a1b2c3", /\d/); // ["a", "b", "c", ""]
 * ```
 */
export function splitString(
  /** The input string to split. */
  str: string,
  /**
   * The delimiter (string or RegExp)
   *
   * @default whitespace  `/\s+/`
   */
  val: string | RegExp = /\s+/,
): string[] {
  return str.split(val);
}
