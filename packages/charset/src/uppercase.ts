/**
 * Generates an array of uppercase ASCII alphabet characters (A–Z).
 *
 * @returns An array containing 'A' to 'Z'.
 *
 * @example
 * ```ts
 * uppercase(); // ['A', 'B', ..., 'Z']
 * ```
 */
export const uppercase = (): string[] => {
  return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
};
