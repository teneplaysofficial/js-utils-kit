/**
 * Determines whether the provided value is a string.
 *
 * This function returns `true` if the input is a non-null, non-undefined
 * primitive string. It acts as a type guard, so TypeScript will narrow
 * the type to `string` when used in conditionals.
 *
 * @template T - The type of the input value.
 * @param value - The value to be checked.
 * @returns - Whether the value is a string (`true`) or not (`false`).
 *
 * @example
 * ```ts
 * isString("hello"); // true
 * isString(123);     // false
 * isString(null);    // false
 * isString(undefined); // false
 *
 * const value: unknown = "test";
 * if (isString(value)) {
 *   console.log(value.toUpperCase());
 * }
 * ```
 */
export function isString<T>(value: T): boolean {
  return value !== null && value !== undefined && typeof value === 'string';
}
