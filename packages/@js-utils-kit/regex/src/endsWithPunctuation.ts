/**
 * Matches if a string ends with a Unicode punctuation character.
 *
 * Uses Unicode property escapes (`\p{P}`) to detect any punctuation from any language/script, not just ASCII.
 *
 * Pattern:
 * - `\p{P}` → ნებისმიერი Unicode punctuation character
 * - `$`     → end of string anchor
 * - `u`     → enables Unicode mode
 *
 * @example
 * ```ts
 * ENDS_WITH_PUNCTUATION_REGEX.test("Hello!"); // true
 * ENDS_WITH_PUNCTUATION_REGEX.test("What?"); // true
 * ENDS_WITH_PUNCTUATION_REGEX.test("Hi."); // true
 * ENDS_WITH_PUNCTUATION_REGEX.test("你好。");  // true (Unicode punctuation)
 * ENDS_WITH_PUNCTUATION_REGEX.test("Hello");  // false
 * ```
 */
export const ENDS_WITH_PUNCTUATION_REGEX = /[\p{P}]$/u;
