/**
 * Builds a frequency map of characters in a string.
 *
 * @remarks
 * - Returns an object where keys are characters and values are counts.
 * - Case-sensitive by default.
 *
 * @returns A mapping of each character to its frequency.
 *
 * @example
 * ```ts
 * countFrequencies("banana");
 * // { b: 1, a: 3, n: 2 }
 *
 * countFrequencies("");
 * // {}
 * ```
 */
export function countFrequencies(
  /** The input string. */
  str: string,
): Record<string, number> {
  return [...str].reduce(
    (map, char) => {
      map[char] = (map[char] || 0) + 1;
      return map;
    },
    {} as Record<string, number>,
  );
}
