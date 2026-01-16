/**
 * Checks whether a value is empty.
 *
 * Empty values include:
 * - `null` or `undefined`
 * - Empty strings (including whitespace-only strings)
 * - Arrays with length `0`
 * - Objects with no own enumerable properties
 * - Maps and Sets with size `0`
 *
 * @returns `true` if the value is empty, otherwise `false`
 *
 * @example
 * ```ts
 * isEmpty(null);        // true
 * isEmpty('');          // true
 * isEmpty('   ');       // true
 * isEmpty([]);          // true
 * isEmpty({});          // true
 * isEmpty(new Map());  // true
 * ```
 *
 * @example
 * ```ts
 * isEmpty('hello');    // false
 * isEmpty([1]);        // false
 * isEmpty({ a: 1 });   // false
 * ```
 */
export function isEmpty<T>(
  /**
   * The value to check.
   */
  value: T,
): boolean {
  if (value == null) return true;

  if (typeof value === 'string') {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
}
