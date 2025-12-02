import { isArray } from './isArray';
import { isDefined } from './isDefined';

/**
 * Checks if a value is a plain object (created by {} or new Object()).
 * @param value - The value to check.
 * @returns True if the value is a plain object, false otherwise.
 * @example
 * ```ts
 * isObject({}); // true
 * isObject(new Object()); // true
 * isObject([]); // false
 * isObject(new Date()); // false
 * ```
 */
export function isObject<T>(value: T): boolean {
  return (
    isDefined(value) &&
    typeof value === 'object' &&
    !isArray(value) &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}
