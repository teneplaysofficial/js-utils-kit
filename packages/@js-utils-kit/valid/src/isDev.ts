import { Environment } from '@js-utils-kit/types';

/**
 * Checks if the current environment is development.
 *
 * This is determined by comparing `process.env.NODE_ENV` with `'development'`.
 *
 * @returns `true` if `NODE_ENV` is set to development.
 *
 * @example
 * ```ts
 * if (isDev()) {
 *   console.log('Dev mode enabled');
 * }
 * ```
 */
export function isDev(): boolean {
  return process.env.NODE_ENV === Environment.DEV;
}
