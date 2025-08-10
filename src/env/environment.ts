/**
 * Represents the standard runtime environments used in application development.
 *
 * This enum is typically used with `process.env.NODE_ENV` to determine
 * whether the app is running in development, production, or test mode.
 *
 * @example
 * ```ts
 * if (process.env.NODE_ENV === Environment.DEV) {
 *   console.log('Running in development mode');
 * }
 * ```
 */
export enum Environment {
  /** Production environment (`"production"`) */
  PROD = 'production',
  /** Development environment (`"development"`) */
  DEV = 'development',
  /** Testing environment (`"test"`) */
  TEST = 'test',
  /** Unknown or undefined environment */
  UNKNOWN = 'unknown',
}

/**
 * Returns the current runtime environment as one of the defined `Environment` enum values.
 *
 * @returns The current environment.
 *
 * @example
 * ```ts
 * const env = getRunTimeEnvironment();
 * if (env === "development") {
 *   console.log('Dev mode enabled');
 * }
 * ```
 */
export function getRunTimeEnvironment(): Environment {
  switch (process.env.NODE_ENV) {
    case Environment.PROD:
      return Environment.PROD;
    case Environment.DEV:
      return Environment.DEV;
    case Environment.TEST:
      return Environment.TEST;
    default:
      return Environment.UNKNOWN;
  }
}

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

/**
 * Checks if the current runtime environment is Node.js.
 *
 * This function is useful to conditionally execute server-side logic.
 * It detects the Node.js environment by verifying the presence of the
 * global `process` object and its `versions.node` property.
 *
 * @returns `true` if running in Node.js, otherwise `false`.
 *
 * @example
 * ```ts
 * if (isNode()) {
 *   console.log('Running in Node.js environment');
 * }
 * ```
 *
 * @see {@link https://nodejs.org/api/process.html | Node.js process documentation}
 */
export function isNode(): boolean {
  return (
    typeof process !== 'undefined' &&
    process.versions !== null &&
    process.versions.node !== null
  );
}

/**
 * Checks if the current runtime environment is a browser.
 *
 * This function helps detect whether code is executing in a web browser
 * by confirming the existence of the global `window` and `document` objects.
 *
 * @returns `true` if running in a browser, otherwise `false`.
 *
 * @example
 * ```ts
 * if (isBrowser()) {
 *   console.log('Running in a browser environment');
 * }
 * ```
 */
export function isBrowser(): boolean {
  return (
    typeof window !== 'undefined' && typeof window.document !== 'undefined'
  );
}
