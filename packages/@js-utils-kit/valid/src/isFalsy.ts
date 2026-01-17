/**
 * Checks whether a value is falsy.
 *
 * Falsy values include:
 * - `false`
 * - `0`
 * - `""`
 * - `null`
 * - `undefined`
 * - `NaN`
 *
 * @returns `true` if the value is falsy, otherwise `false`
 *
 * @example
 * ```ts
 * isFalsy(0);        // true
 * isFalsy('');       // true
 * isFalsy(null);     // true
 * isFalsy(undefined);// true
 * isFalsy(NaN);      // true
 * ```
 *
 * @example
 * ```ts
 * isFalsy(1);        // false
 * isFalsy('hello');  // false
 * isFalsy([]);  // false
 * isFalsy({});  // false
 * ```
 */
export function isFalsy<T>(
  /**
   * The value to check.
   */
  value: T,
): boolean {
  return !value;
}
