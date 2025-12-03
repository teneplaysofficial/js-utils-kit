import { digits } from './digits';
import { lowercase } from './lowercase';
import { uppercase } from './uppercase';

/**
 * Combines lowercase, uppercase, and digit characters into a single array.
 *
 * @returns An array containing 'a'–'z', 'A'–'Z', and '0'–'9'.
 *
 * @example
 * ```ts
 * alphanumeric(); // ['a', ..., 'z', 'A', ..., 'Z', '0', ..., '9']
 * ```
 */
export const alphanumeric = (): string[] => {
  return [...lowercase(), ...uppercase(), ...digits()];
};
