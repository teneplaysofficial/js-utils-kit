import { isArray } from './isArray';

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
