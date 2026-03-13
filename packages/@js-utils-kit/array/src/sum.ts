/**
 * Calculates the sum of values in an array.
 *
 * If a `key` is provided, the value from that property will be used for each item.
 * Otherwise, items themselves are converted to numbers.
 *
 * Supports nested arrays of values.
 *
 * @remarks
 * Values are converted using `Number()`. Non-numeric values will result in `NaN`.
 *
 * @typeParam T - The type of items in the array.
 *
 * @returns The sum of all numeric values.
 *
 * @example Sum a flat array
 * ```ts
 * sum([1, 2, 3])
 * // 6
 * ```
 *
 * @example Sum nested arrays
 * ```ts
 * sum([[1, 2], [3, 4]])
 * // 10
 * ```
 *
 * @example Sum deeply nested arrays
 * ```ts
 * sum([1, [2, [3, 4]]])
 * // 10
 * ```
 *
 * @example Sum objects using a key
 * ```ts
 * sum([{ price: 10 }, { price: 20 }], 'price')
 * // 30
 * ```
 *
 * @example Sum nested objects using a key
 * ```ts
 * sum([{ price: 10 }, [{ price: 20 }]], 'price')
 * // 30
 * ```
 *
 * @example Sum object values from a property
 * ```ts
 * sum([{ score: 5 }, { score: 7 }, { score: 8 }], 'score')
 * // 20
 * ```
 */
export function sum<T>(
  /** The array of items to sum. */
  items: (T | T[])[],
  /** Optional property key used to extract numeric values from each item. */
  key?: keyof T,
): number {
  let total = 0;

  const stack = [...items];

  while (stack.length) {
    const item = stack.pop();

    if (item == null) continue;

    if (Array.isArray(item)) {
      stack.push(...item);
      continue;
    }

    const value = key ? Number((item as T)[key]) : Number(item);
    total += value;
  }

  return total;
}
