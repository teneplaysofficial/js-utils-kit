import { Environment } from '@js-utils-kit/types';

/**
 * Checks if the current environment is testing.
 *
 * This is determined by comparing `process.env.NODE_ENV` with `'test'`.
 *
 * @returns `true` if `NODE_ENV` is set to test.
 *
 * @example
 * ```ts
 * if (isTest()) {
 *   mockDatabase();
 * }
 * ```
 */
export function isTest(): boolean {
  return process.env.NODE_ENV === Environment.TEST;
}
