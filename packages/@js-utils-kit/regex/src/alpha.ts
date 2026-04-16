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

/**
 * Matches strings containing only lowercase alphabetic characters.
 *
 * A valid string:
 * - Contains only letters from `a` to `z`
 * - Has at least one character
 * - Does not include numbers, spaces, or special characters
 *
 * @example
 * ```ts
 * LOWERCASE_ALPHA_REGEX.test("hello"); // true
 * LOWERCASE_ALPHA_REGEX.test("abc"); // true
 * ```
 *
 * ```ts
 * LOWERCASE_ALPHA_REGEX.test("Hello"); // false
 * LOWERCASE_ALPHA_REGEX.test("abc123"); // false
 * LOWERCASE_ALPHA_REGEX.test("hello world"); // false
 * LOWERCASE_ALPHA_REGEX.test(""); // false
 * ```
 */
export const LOWERCASE_ALPHA_REGEX = /^[a-z]+$/;

/**
 * Matches strings containing only uppercase alphabetic characters.
 *
 * A valid string:
 * - Contains only letters from `A` to `Z`
 * - Has at least one character
 * - Does not include lowercase letters, numbers, spaces, or symbols
 *
 * @example
 * ```ts
 * UPPERCASE_ALPHA_REGEX.test("HELLO"); // true
 * UPPERCASE_ALPHA_REGEX.test("ABC"); // true
 * ```
 *
 * ```ts
 * UPPERCASE_ALPHA_REGEX.test("Hello"); // false
 * UPPERCASE_ALPHA_REGEX.test("HELLO123"); // false
 * UPPERCASE_ALPHA_REGEX.test("HELLO WORLD"); // false
 * UPPERCASE_ALPHA_REGEX.test(""); // false
 * ```
 */
export const UPPERCASE_ALPHA_REGEX = /^[A-Z]+$/;

/**
 * Matches strings that start with an uppercase letter.
 *
 * A valid string:
 * - First character must be `A–Z`
 * - Remaining characters are not restricted
 *
 * @example
 * ```ts
 * STARTS_WITH_UPPERCASE_REGEX.test("Hello"); // true
 * STARTS_WITH_UPPERCASE_REGEX.test("World123"); // true
 * ```
 *
 * ```ts
 * STARTS_WITH_UPPERCASE_REGEX.test("hello"); // false
 * STARTS_WITH_UPPERCASE_REGEX.test("1Hello"); // false
 * STARTS_WITH_UPPERCASE_REGEX.test(""); // false
 * ```
 */
export const STARTS_WITH_UPPERCASE_REGEX = /^[A-Z]/;
