/**
 * Checks whether a given string represents a valid numeric value.
 *
 * This function attempts to convert the input string to a number using
 * both `Number()` and `parseFloat()`. It returns `true` only if both
 * conversions do not result in `NaN`, ensuring that the input is
 * a fully numeric string.
 *
 * Accepts integers, decimals, scientific notation (e.g. "1e5"), and
 * ignores surrounding whitespace. Does not allow trailing or embedded characters
 * like "123abc" or "abc123".
 *
 * @param value - The string to validate.
 * @returns - `true` if the string represents a valid number; otherwise, `false`.
 *
 * @example
 * ```ts
 * isNumericString("42"); // true
 * isNumericString("-3.14"); // true
 * isNumericString("1e5"); // true
 * isNumericString("  123 "); // true
 * isNumericString("123abc"); // false
 * isNumericString("abc123"); // false
 * ```
 * See also:
 * - {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number Number()}
 * - {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat parseFloat()}
 * - {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN isNaN()}
 */
export function isNumericString(value: string): boolean {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}
