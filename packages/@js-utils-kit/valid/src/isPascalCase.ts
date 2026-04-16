import { PASCAL_CASE_REGEX } from '@js-utils-kit/regex';

/**
 * Checks if a string is in PascalCase format.
 *
 * @returns True if the string is PascalCase.
 *
 * @example
 * ```ts
 * isPascalCase("HelloWorld") // true
 * isPascalCase("helloWorld") // false
 * ```
 */
export function isPascalCase(
  /** The input string */
  value: string,
): boolean {
  return PASCAL_CASE_REGEX.test(value);
}
