/**
 * Matches if a string contains only Unicode alphabetic characters.
 *
 * Uses Unicode property escapes (`\p{L}`) to match any kind of letter from any language/script.
 *
 * Pattern:
 * - `^`     → start of string
 * - `\p{L}` → any Unicode letter
 * - `+`     → one or more characters
 * - `$`     → end of string
 * - `u`     → enables Unicode mode
 *
 * @example
 * ```ts
 * IS_ALPHA_UNICODE_REGEX.test("Hello"); // true
 * IS_ALPHA_UNICODE_REGEX.test("Привет"); // true
 * IS_ALPHA_UNICODE_REGEX.test("مرحبا"); // true
 * IS_ALPHA_UNICODE_REGEX.test("你好"); // true
 * IS_ALPHA_UNICODE_REGEX.test("Hello123"); // false
 * IS_ALPHA_UNICODE_REGEX.test("hello world"); // false
 * IS_ALPHA_UNICODE_REGEX.test(""); // false
 * ```
 */
export const IS_ALPHA_UNICODE_REGEX = /^\p{L}+$/u;
