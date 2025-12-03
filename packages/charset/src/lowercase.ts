/**
 * Generates an array of lowercase ASCII alphabet characters (a–z).
 *
 * @returns An array containing 'a' to 'z'.
 *
 * @example
 * ```ts
 * lowercase(); // ['a', 'b', ..., 'z']
 * ```
 */
export const lowercase = (): string[] => {
  return Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
};
