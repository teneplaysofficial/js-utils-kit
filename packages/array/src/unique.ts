/**
 * Returns a new array with duplicate values removed.
 *
 * Uniqueness is determined using `Set`, meaning object uniqueness is based on reference equality.
 *
 * @example
 * ```ts
 * unique([3, 1, 2, 1]);
 * // [3, 1, 2]
 *
 * unique([3, 1, 2, 1], { sort: true });
 * // [1, 2, 3]
 *
 * const users = [
 *   { id: 3, name: 'Charlie' },
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 1, name: 'Alice' },
 * ];
 *
 * unique(users, {
 *   sort: true,
 *   compareFn: (a, b) => a.id - b.id,
 * });
 *
 * // [
 * //   { id: 1, name: 'Alice' },
 * //   { id: 2, name: 'Bob' },
 * //   { id: 3, name: 'Charlie' }
 * // ]
 * ```
 */
export function unique<T>(
  /**
   * The source array.
   */
  array: readonly T[],
  {
    sort = false,
    compareFn,
  }: {
    /**
     * Whether to sort the result.
     *
     * @default false
     */
    sort?: boolean;
    /**
     * Custom compare function for sorting.
     */
    compareFn?: (a: T, b: T) => number;
  } = {},
): T[] {
  const result = [...new Set(array)];

  if (!sort) {
    return result;
  }

  return compareFn ? result.sort(compareFn) : result.sort();
}
