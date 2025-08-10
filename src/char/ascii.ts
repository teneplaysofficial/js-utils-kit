/**
 * Generates an array of lowercase ASCII alphabet characters (a–z).
 *
 * @returns An array containing 'a' to 'z'.
 * @example
 * lowercase(); // ['a', 'b', ..., 'z']
 */
export const lowercase = (): string[] => {
  return Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
};

/**
 * Generates an array of uppercase ASCII alphabet characters (A–Z).
 *
 * @returns An array containing 'A' to 'Z'.
 * @example
 * uppercase(); // ['A', 'B', ..., 'Z']
 */
export const uppercase = (): string[] => {
  return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
};

/**
 * Generates an array of ASCII digit characters (0–9).
 *
 * @returns An array containing '0' to '9'.
 * @example
 * digits(); // ['0', '1', ..., '9']
 */
export const digits = (): string[] => {
  return Array.from({ length: 10 }, (_, i) => String.fromCharCode(48 + i));
};

/**
 * Combines lowercase, uppercase, and digit characters into a single array.
 *
 * @returns An array containing 'a'–'z', 'A'–'Z', and '0'–'9'.
 * @example
 * all(); // ['a', ..., 'z', 'A', ..., 'Z', '0', ..., '9']
 */
export const all = (): string[] => {
  return [...lowercase(), ...uppercase(), ...digits()];
};
