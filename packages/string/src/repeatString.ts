/**
 * Repeats a string a specified number of times.
 * @param str - The string to repeat.
 * @param count - The number of times to repeat the string (must be non-negative).
 * @returns The string repeated the specified number of times.
 * @example
 * ```ts
 * console.log(repeatString("hi", 3)); // "hihihi"
 * console.log(repeatString("a", 2)); // "aa"
 * console.log(repeatString("test", 0)); // ""
 * console.log(repeatString("", 5)); // ""
 * ```
 */
export function repeatString(str: string, count: number): string {
  return str.repeat(count);
}
