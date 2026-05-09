import { NPM_PACKAGE_NAME_REGEX } from '@js-utils-kit/regex';

/**
 * Checks whether a string is a valid npm package name.
 *
 * @returns `true` if valid, otherwise `false`
 *
 * @example
 * ```ts
 * isValidNpmPackageName('react');
 * // true
 *
 * isValidNpmPackageName('@types/node');
 * // true
 *
 * isValidNpmPackageName('React');
 * // false
 * ```
 */
export function isValidPackageName(
  /** Package name to validate */
  value: string,
): boolean {
  return NPM_PACKAGE_NAME_REGEX.test(value);
}
