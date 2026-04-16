/**
 * Matches if a string contains only alphabetic characters (A–Z, a–z).
 *
 * @remarks
 * This regex is ASCII-only and does NOT support Unicode letters.
 * For Unicode support, consider using: {@link IS_ALPHA_UNICODE_REGEX}
 *
 * Pattern:
 * - `^`        → start of string
 * - `[a-zA-Z]` → ASCII letters only
 * - `+`        → one or more characters
 * - `$`        → end of string
 *
 * @example
 * ```ts
 * IS_ALPHA_REGEX.test("Hello"); // true
 * IS_ALPHA_REGEX.test("123");   // false
 * IS_ALPHA_REGEX.test("Hello123");   // false
 * IS_ALPHA_REGEX.test("Hello!");   // false
 * ```
 */
export const IS_ALPHA_REGEX = /^[a-zA-Z]+$/;
