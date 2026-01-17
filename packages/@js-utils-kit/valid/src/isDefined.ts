/**
 * Checks if a value is neither null nor undefined.
 *
 * @returns True if the value is defined (not null or undefined), false otherwise.
 *
 * @example
 * ```ts
 * isDefined(42); // true
 * isDefined("hello"); // true
 * isDefined(null); // false
 * isDefined(undefined); // false
 * ```
 */
export function isDefined<T>(
  /** The value to check */
  value: T,
): boolean {
  return value != null;
}
