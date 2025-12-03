/**
 * Checks if a value is either null or undefined.
 *
 * @returns True if the value is null or undefined, false otherwise.
 *
 * @example
 * ```ts
 * isUndefinedOrNull(null); // true
 * isUndefinedOrNull(undefined); // true
 * isUndefinedOrNull(0); // false
 * isUndefinedOrNull(""); // false
 * ```
 */
export function isUndefinedOrNull<T>(
  /** The value to check */
  value: T,
): boolean {
  return value == null;
}
