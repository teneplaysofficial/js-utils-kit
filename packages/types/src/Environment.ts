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
