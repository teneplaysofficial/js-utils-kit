/**
 * Splits an array into chunks of a specified size.
 *
 * @returns list of grouped chunks
 *
 * @example
 * ```ts
 * chunk([1, 2, 3, 4], 2);
 * // [[1, 2], [3, 4]]
 *
 * chunk(['a', 'b', 'c'], 1);
 * // [['a'], ['b'], ['c']]
 * ```
 */
export function chunk<T>(
  /**
   * List of elements.
   */
  array: readonly T[],
  /**
   * Length of each chunk to group.
   */
  size: number = 1,
): T[][] {
  if (size <= 0) throw new RangeError('chunk size must be greater than 0');
  if (array.length === 0) return [];

  return [array.slice(0, size), ...chunk(array.slice(size), size)];
}
