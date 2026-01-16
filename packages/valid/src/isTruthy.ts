/**
 * Checks whether a value is truthy.
 *
 * Falsy values include:
 * - `false`
 * - `0`
 * - `""` (empty string)
 * - `null`
 * - `undefined`
 * - `NaN`
 *
 * @returns `true` if the value is truthy, otherwise `false`.
 *
 * @example
 * ```ts
 * isTruthy(0);         // false
 * isTruthy('');        // false
 * isTruthy(null);      // false
 * isTruthy(undefined); // false
 * isTruthy(NaN);       // false
 * ```
 *
 * @example
 * ```ts
 * isTruthy(1);         // true
 * isTruthy('hello');   // true
 * isTruthy([]);        // true
 * isTruthy({});        // true
 * ```
 */
export function isTruthy<T>(
  /**
   * The value to check.
   */
  value: T,
): boolean {
  return Boolean(value);
}
