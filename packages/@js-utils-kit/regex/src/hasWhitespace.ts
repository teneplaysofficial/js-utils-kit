/**
 * Matches if a string contains any whitespace character.
 *
 * Whitespace includes:
 * - Spaces (` `)
 * - Tabs (`\t`)
 * - Newlines (`\n`)
 * - Carriage returns (`\r`)
 * - Form feeds (`\f`)
 * - Vertical tabs (`\v`)
 *
 * Pattern:
 * - `\s` → any whitespace character
 *
 * @example
 * ```ts
 * HAS_WHITESPACE_REGEX.test("Hello World"); // true
 * HAS_WHITESPACE_REGEX.test("Hello\tWorld"); // true
 * HAS_WHITESPACE_REGEX.test("Hello\nWorld"); // true
 * HAS_WHITESPACE_REGEX.test("HelloWorld");  // false
 * ```
 */
export const HAS_WHITESPACE_REGEX = /\s/;
