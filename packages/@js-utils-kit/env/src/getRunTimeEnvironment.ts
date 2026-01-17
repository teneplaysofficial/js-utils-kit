import { Environment } from '@js-utils-kit/types';

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
