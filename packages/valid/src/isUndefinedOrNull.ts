/**
 * Checks if a value is either null or undefined.
 * @param value - The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 * @example
 * ```ts
 * isUndefinedOrNull(null); // true
 * isUndefinedOrNull(undefined); // true
 * isUndefinedOrNull(0); // false
 * isUndefinedOrNull(""); // false
 * ```
 */
export function isUndefinedOrNull<T>(value: T): boolean {
  return value == null;
}
