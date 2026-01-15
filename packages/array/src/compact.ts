/**
 * Removes all falsy values from an array.
 *
 * Falsy values include: `false`, `null`, `0`, `""`, `undefined`, and `NaN`.
 *
 * @returns A new array with all falsy values removed
 *
 * @example
 * ```ts
 * compact([0, 1, false, 2, '', 3, null]);
 * // [1, 2, 3]
 *
 * compact(['a', '', 'b', undefined]);
 * // ['a', 'b']
 * ```
 */
export function compact<T>(
  /**
   * A list of elements to compact
   */
  array: readonly T[],
): T[] {
  return array.filter(Boolean);
}
