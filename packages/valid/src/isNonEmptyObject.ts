import { isArray } from './isArray';

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
