import { SNAKE_CASE_REGEX } from '@js-utils-kit/regex';

/**
 * Checks if a string is in snake_case format.
 *
 * @returns True if the string is snake_case.
 *
 * @example
 * ```ts
 * isSnakeCase("hello_world") // true
 * isSnakeCase("hello-world") // false
 * ```
 */
export function isSnakeCase(
  /** The input string */
  value: string,
): boolean {
  return SNAKE_CASE_REGEX.test(value);
}
