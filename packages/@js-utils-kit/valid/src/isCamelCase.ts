import { CAMEL_CASE_REGEX } from '@js-utils-kit/regex';

/**
 * Checks if a string is in camelCase format.
 *
 * @returns True if the string is camelCase.
 *
 * @example
 * ```ts
 * isCamelCase("helloWorld") // true
 * isCamelCase("hello") // false
 * isCamelCase("HelloWorld") // false
 * isCamelCase("hello_world") // false
 * ```
 */
export function isCamelCase(
  /** The input string */
  value: string,
): boolean {
  return CAMEL_CASE_REGEX.test(value);
}
