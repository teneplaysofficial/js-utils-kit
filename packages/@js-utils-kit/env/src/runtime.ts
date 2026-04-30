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
 * if (isDev) {
 *   console.log('Dev mode enabled');
 * }
 * ```
 */
export const isDev: boolean =
  typeof process !== 'undefined' && process.env['NODE_ENV'] === Environment.DEV;

/**
 * Checks if the current environment is production.
 *
 * This is determined by comparing `process.env.NODE_ENV` with `'production'`.
 *
 * @returns `true` if `NODE_ENV` is set to production.
 *
 * @example
 * ```ts
 * if (isProd) {
 *   enableAnalytics();
 * }
 * ```
 */
export const isProd: boolean =
  typeof process !== 'undefined' && process.env['NODE_ENV'] === Environment.PROD;

/**
 * Checks if the current environment is testing.
 *
 * This is determined by comparing `process.env.NODE_ENV` with `'test'`.
 *
 * @returns `true` if `NODE_ENV` is set to test.
 *
 * @example
 * ```ts
 * if (isTest) {
 *   mockDatabase();
 * }
 * ```
 */
export const isTest: boolean =
  typeof process !== 'undefined' && process.env['NODE_ENV'] === Environment.TEST;

/**
 * Checks if the current runtime environment is Node.js.
 *
 * @remarks
 * - It is useful to conditionally execute server-side logic.
 * - It detects the Node.js environment by verifying the presence of the global `process` object and its `versions.node` property.
 *
 * @returns `true` if running in Node.js, otherwise `false`.
 *
 * @example
 * ```ts
 * if (isNode) {
 *   console.log('Running in Node.js environment');
 * }
 * ```
 *
 * @see {@link https://nodejs.org/api/process.html | Node.js process documentation}
 */
export const isNode: boolean =
  typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

/**
 * Determines whether the current runtime is executing in a CommonJS environment.
 *
 * @remarks
 * This performs multiple checks to improve reliability:
 * - `module.exports` existence (primary CJS signal)
 * - `exports` object presence
 * - `require` function availability
 * - `__filename` and `__dirname` variables
 *
 * No single check is fully reliable across all bundlers/transpilers,
 * so a combination is used.
 *
 * @returns `true` if the runtime is very likely CommonJS, otherwise `false`.
 *
 * @example
 * ```ts
 * if (isCommonJS) {
 *   console.log("Running in CommonJS");
 * } else {
 *   console.log("Running in ESM");
 * }
 * ```
 */
export const isCommonJS =
  typeof module !== 'undefined' &&
  typeof module.exports !== 'undefined' &&
  typeof exports !== 'undefined' &&
  typeof require === 'function' &&
  typeof __filename !== 'undefined' &&
  typeof __dirname !== 'undefined';
