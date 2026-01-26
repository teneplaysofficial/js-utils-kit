/**
 * List of supported HTTP request methods.
 */
export const HTTP_METHODS = [
  'GET',
  'POST',
  'PUT',
  'PATCH',
  'DELETE',
  'HEAD',
  'OPTIONS',
  'CONNECT',
  'TRACE',
] as const;

/**
 * Common HTTP status codes.
 *
 * @example
 * ```ts
 * res.status(HTTP_STATUS.OK).json({ success: true })
 * ```
 */
export const HTTP_STATUS = {
  /** Request received, continuing process */
  CONTINUE: 100,

  /** Switching protocols as requested */
  SWITCHING_PROTOCOLS: 101,

  /** WebDAV: Processing request */
  PROCESSING: 102,

  /** Early hints before final response */
  EARLY_HINTS: 103,

  /** Request succeeded */
  OK: 200,

  /** Resource successfully created */
  CREATED: 201,

  /** Request accepted but not yet processed */
  ACCEPTED: 202,

  /** Non-authoritative information */
  NON_AUTHORITATIVE_INFORMATION: 203,

  /** Request successful but no content returned */
  NO_CONTENT: 204,

  /** Reset view/document */
  RESET_CONTENT: 205,

  /** Partial content returned */
  PARTIAL_CONTENT: 206,

  /** WebDAV: Multi-status response */
  MULTI_STATUS: 207,

  /** WebDAV: Already reported */
  ALREADY_REPORTED: 208,

  /** Response successfully processed but no body */
  IM_USED: 226,

  /** Multiple response choices */
  MULTIPLE_CHOICES: 300,

  /** Resource permanently moved */
  MOVED_PERMANENTLY: 301,

  /** Resource found at a different URI */
  FOUND: 302,

  /** See another URI using GET */
  SEE_OTHER: 303,

  /** Resource not modified */
  NOT_MODIFIED: 304,

  /** Use proxy (deprecated) */
  USE_PROXY: 305,

  /** Temporary redirect */
  TEMPORARY_REDIRECT: 307,

  /** Permanent redirect */
  PERMANENT_REDIRECT: 308,

  /** Invalid request syntax */
  BAD_REQUEST: 400,

  /** Authentication required */
  UNAUTHORIZED: 401,

  /** Payment required (reserved) */
  PAYMENT_REQUIRED: 402,

  /** Access forbidden */
  FORBIDDEN: 403,

  /** Resource not found */
  NOT_FOUND: 404,

  /** Method not allowed */
  METHOD_NOT_ALLOWED: 405,

  /** Not acceptable */
  NOT_ACCEPTABLE: 406,

  /** Proxy authentication required */
  PROXY_AUTH_REQUIRED: 407,

  /** Request timeout */
  REQUEST_TIMEOUT: 408,

  /** Request conflict */
  CONFLICT: 409,

  /** Resource no longer available */
  GONE: 410,

  /** Length required */
  LENGTH_REQUIRED: 411,

  /** Precondition failed */
  PRECONDITION_FAILED: 412,

  /** Payload too large */
  PAYLOAD_TOO_LARGE: 413,

  /** URI too long */
  URI_TOO_LONG: 414,

  /** Unsupported media type */
  UNSUPPORTED_MEDIA_TYPE: 415,

  /** Range not satisfiable */
  RANGE_NOT_SATISFIABLE: 416,

  /** Expectation failed */
  EXPECTATION_FAILED: 417,

  /** Teapot */
  IM_A_TEAPOT: 418,

  /** Misdirected request */
  MISDIRECTED_REQUEST: 421,

  /** Unprocessable entity */
  UNPROCESSABLE_ENTITY: 422,

  /** Resource locked */
  LOCKED: 423,

  /** Failed dependency */
  FAILED_DEPENDENCY: 424,

  /** Too early */
  TOO_EARLY: 425,

  /** Upgrade required */
  UPGRADE_REQUIRED: 426,

  /** Precondition required */
  PRECONDITION_REQUIRED: 428,

  /** Too many requests (rate limited) */
  TOO_MANY_REQUESTS: 429,

  /** Request header fields too large */
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,

  /** Unavailable for legal reasons */
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,

  /** Internal server error */
  INTERNAL_SERVER_ERROR: 500,

  /** Not implemented */
  NOT_IMPLEMENTED: 501,

  /** Bad gateway */
  BAD_GATEWAY: 502,

  /** Service unavailable */
  SERVICE_UNAVAILABLE: 503,

  /** Gateway timeout */
  GATEWAY_TIMEOUT: 504,

  /** HTTP version not supported */
  HTTP_VERSION_NOT_SUPPORTED: 505,

  /** Variant also negotiates */
  VARIANT_ALSO_NEGOTIATES: 506,

  /** Insufficient storage */
  INSUFFICIENT_STORAGE: 507,

  /** Loop detected */
  LOOP_DETECTED: 508,

  /** Bandwidth limit exceeded */
  BANDWIDTH_LIMIT_EXCEEDED: 509,

  /** Not extended */
  NOT_EXTENDED: 510,

  /** Network authentication required */
  NETWORK_AUTHENTICATION_REQUIRED: 511,
} as const;
