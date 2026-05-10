import { NODE_BUILTIN_MODULES } from '@js-utils-kit/constants';
import { NPM_PACKAGE_NAME_REGEX } from '@js-utils-kit/regex';

/** The maximum permitted length for an npm package name */
export const MAX_NPM_PACKAGE_NAME_LENGTH = 214 as const;

/**
 * Checks whether a string is a valid npm package name.
 *
 * @returns `true` if valid, otherwise `false`
 *
 * @example
 * ```ts
 * isValidPackageName('react');
 * // true
 *
 * isValidPackageName('@types/node');
 * // true
 *
 * isValidPackageName('React');
 * // false
 * ```
 */
export function isValidPackageName(
  /** Package name to validate */
  value: string,
) {
  return (
    typeof value === 'string' &&
    !(NODE_BUILTIN_MODULES?.includes(value as never) ?? false) &&
    NPM_PACKAGE_NAME_REGEX.test(value)
  );
}
