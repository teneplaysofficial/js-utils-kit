import { Environment } from '@js-utils-kit/types';

/**
 * Checks if the current environment is production.
 *
 * This is determined by comparing `process.env.NODE_ENV` with `'production'`.
 *
 * @returns `true` if `NODE_ENV` is set to production.
 *
 * @example
 * ```ts
 * if (isProd()) {
 *   enableAnalytics();
 * }
 * ```
 */
export function isProd(): boolean {
  return process.env.NODE_ENV === Environment.PROD;
}
