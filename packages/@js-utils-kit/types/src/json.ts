/**
 * Represents the `replacer` argument accepted by {@link JSON.stringify}
 *
 * This type unifies the two overloads of `JSON.stringify` into a single.
 *
 * @remarks
 * - The function form is called for each key-value pair during serialization.
 * - Returning `undefined` from the function will omit the property.
 * - The array form acts as a whitelist of keys to include.
 * - Defined explicitly to avoid TypeScript overload inference issues with `Parameters<typeof JSON.stringify>[1]`.
 */
export type JsonReplacer =
  | ((this: unknown, key: string, value: unknown) => unknown)
  | readonly (string | number)[]
  | null;
