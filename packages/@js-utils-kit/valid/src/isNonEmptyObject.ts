import { isArray } from './isArray';

/**
 * Checks if a value is a non-empty object (has at least one enumerable own property).
 *
 * @returns True if the value is a non-null object with at least one enumerable own property, false otherwise.
 *
 * @example
 * ```ts
 * isNonEmptyObject({ key: 'value' }); // true
 * isNonEmptyObject({}); // false
 * isNonEmptyObject(null); // false
 * isNonEmptyObject([]); // false
 * ```
 */
export function isNonEmptyObject(
  /** The value to check */
  value: object,
): boolean {
  return (
    value !== null && typeof value === 'object' && Object.keys(value).length > 0 && !isArray(value)
  );
}
