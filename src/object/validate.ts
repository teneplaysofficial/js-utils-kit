import { isArray } from '../array/validate';
import { isDefined } from '../checks';

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

/**
 * Checks if a value is an empty object (has no enumerable own properties).
 * @param value - The value to check.
 * @returns True if the value is a non-null object with no enumerable own properties, false otherwise.
 * @example
 * ```ts
 * isEmptyObject({}); // true
 * isEmptyObject({ key: 'value' }); // false
 * isEmptyObject(null); // false
 * isEmptyObject([]); // false
 * ```
 */
export function isEmptyObject(value: object): boolean {
  return (
    value !== null &&
    typeof value === 'object' &&
    Object.keys(value).length === 0 &&
    !isArray(value)
  );
}

/**
 * Checks if a value is a non-empty object (has at least one enumerable own property).
 * @param value - The value to check.
 * @returns True if the value is a non-null object with at least one enumerable own property, false otherwise.
 * @example
 * ```ts
 * isNonEmptyObject({ key: 'value' }); // true
 * isNonEmptyObject({}); // false
 * isNonEmptyObject(null); // false
 * isNonEmptyObject([]); // false
 * ```
 */
export function isNonEmptyObject(value: object): boolean {
  return (
    value !== null && typeof value === 'object' && Object.keys(value).length > 0 && !isArray(value)
  );
}
