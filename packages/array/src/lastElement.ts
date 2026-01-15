/**
 * Returns the last element of an array.
 *
 * @returns The last element, or `undefined` if the array is empty
 *
 * @example
 * lastElement([1, 2, 3]);
 * // 3
 *
 * lastElement([]);
 * // undefined
 */
export function lastElement<T>(
  /**
   * A list of elements.
   */
  array: readonly T[],
): T | undefined {
  return array.at(-1);
}
