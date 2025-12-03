/**
 * Generates an array of ASCII digit characters (0–9).
 *
 * @returns An array containing '0' to '9'.
 *
 * @example
 * ```ts
 * digits(); // ['0', '1', ..., '9']
 * ```
 */
export const digits = (): string[] => {
  return Array.from({ length: 10 }, (_, i) => String.fromCharCode(48 + i));
};
