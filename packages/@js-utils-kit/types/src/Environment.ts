/**
 * Represents the standard runtime environments used in application development.
 *
 * This enum is typically used with {@link https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production process.env.NODE_ENV } to determine
 * whether the app is running in development, production, or test mode.
 *
 * @example
 * ```ts
 * if (process.env.NODE_ENV === Environment.DEV) {
 *   console.log('Running in development mode');
 * }
 * ```
 */
export const Environment = {
  /** Production environment (`"production"`) */
  PROD: 'production',
  /** Development environment (`"development"`) */
  DEV: 'development',
  /** Testing environment (`"test"`) */
  TEST: 'test',
  /** Unknown or undefined environment */
  UNKNOWN: 'unknown',
} as const;

// eslint-disable-next-line no-redeclare
export type Environment = (typeof Environment)[keyof typeof Environment];
