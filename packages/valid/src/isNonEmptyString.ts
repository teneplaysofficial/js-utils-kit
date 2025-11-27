import { isString } from './isString';

/**
 * Determines whether the given value is a non-empty string.
 *
 * This function first checks if the input is a string using {@link isString}.
 * If it is not a string, the function returns `false`.
 * If it is a string, it then checks whether the string contains any non-empty content.
 *
 * By default, the function trims the string before checking its length,
 * which means strings containing only whitespace (e.g., `"   "`) will be considered empty.
 * This behavior can be controlled using the `trim` parameter.
 *
 * @template T - The type of the value being checked.
 *
 * @param value - The value to validate as a non-empty string.
 * @param trim - Whether to trim whitespace from the string before checking its length.
 *               Defaults to `true`.
 *
 * @returns - A boolean indicating whether the input is a non-empty string.
 *
 * @example
 * ```ts
 * isNonEmptyString('hello'); // true
 * isNonEmptyString('   '); // false (trim is true by default)
 * isNonEmptyString('   ', false); // true (whitespace is counted)
 * isNonEmptyString(123); // false
 * isNonEmptyString(null); // false
 * ```
 */
export function isNonEmptyString<T>(value: T, trim = true): boolean {
  if (!isString(value)) return false;

  return typeof value === 'string' && (trim ? value.trim().length > 0 : value.length > 0);
}
