/**
 * Pads a string on the left with a specified character until it reaches the desired length.
 * @param str - The string to pad.
 * @param length - The target length of the padded string.
 * @param char - The character to use for padding (defaults to a space).
 * @returns The padded string, or the original string if its length is already greater than or equal to the target length.
 * @example
 * ```ts
 * console.log(padLeft("hello", 8)); // "   hello"
 * console.log(padLeft("hi", 5, "*")); // "***hi"
 * console.log(padLeft("hello", 3)); // "hello"
 * console.log(padLeft("", 3, "0")); // "000"
 * ```
 */
export function padLeft(str: string, length: number, char: string = ' '): string {
  return str.padStart(length, char);
}
