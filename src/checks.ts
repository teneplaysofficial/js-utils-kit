/**
 * Checks if a value is neither null nor undefined.
 * @param value - The value to check.
 * @returns True if the value is defined (not null or undefined), false otherwise.
 * @example
 * ```ts
 * isDefined(42); // true
 * isDefined("hello"); // true
 * isDefined(null); // false
 * isDefined(undefined); // false
 * ```
 */
export function isDefined<T>(value: T): boolean {
  return value != null;
}

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
