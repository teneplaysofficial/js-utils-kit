import { HTTP_STATUS } from '@js-utils-kit/constants';

/**
 * Union type of all supported HTTP status codes.
 *
 * This type is derived directly from {@link HTTP_STATUS} and represents every possible numeric HTTP status value.
 *
 * Useful for enforcing strict type-safety when working with HTTP responses, middleware, validators, and utility functions.
 *
 * @example
 * ```ts
 * function handleStatus(code: HttpStatusCode) {
 *   if (code === HTTP_STATUS.NOT_FOUND) {
 *     // handle 404
 *   }
 * }
 * ```
 */
export type HttpStatusCode = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS];
