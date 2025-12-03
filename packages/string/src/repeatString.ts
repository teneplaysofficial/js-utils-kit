/**
 * Repeats a string a specified number of times.
 *
 * @returns The string repeated the specified number of times.
 *
 * @example
 * ```ts
 * console.log(repeatString("hi", 3)); // "hihihi"
 * console.log(repeatString("a", 2)); // "aa"
 * console.log(repeatString("test", 0)); // ""
 * console.log(repeatString("", 5)); // ""
 * ```
 */
export function repeatString(
  /** The string to repeat */
  str: string,
  /** The number of times to repeat the string (must be non-negative) */
  count: number,
): string {
  return str.repeat(count);
}
