/**
 * Regular expression to validate the local part of an email address.
 *
 * This pattern ensures:
 * - No leading dot
 * - No consecutive dots
 * - Allows alphanumeric characters and `_ % + -`
 * - Allows dots (`.`) as separators between segments
 * - No trailing dot
 *
 * ⚠️ Note:
 * This regex only validates the part before the "@" symbol.
 *
 * @example
 * ```ts
 * EMAIL_LOCAL_PART_REGEX.test("user.name"); // true
 * EMAIL_LOCAL_PART_REGEX.test(".username"); // false
 * EMAIL_LOCAL_PART_REGEX.test("user..name"); // false
 * ```
 */
export const EMAIL_LOCAL_PART_REGEX = /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_%+-]+(\.[a-zA-Z0-9_%+-]+)*)$/;

/**
 * Regular expression to validate the domain part of an email address.
 *
 * This pattern ensures:
 * - No consecutive dots
 * - Each label:
 *   - Is 1–63 characters long
 *   - Contains only alphanumeric characters or hyphens
 *   - Does not start or end with a hyphen
 * - Domain contains at least one dot
 * - Top-level domain (TLD) has at least 2 alphabetic characters
 *
 * ⚠️ Note:
 * This regex only validates the part after the "@" symbol.
 *
 * @example
 * ```ts
 * EMAIL_DOMAIN_REGEX.test("example.com"); // true
 * EMAIL_DOMAIN_REGEX.test("sub.domain.co.in"); // true
 * EMAIL_DOMAIN_REGEX.test("-example.com"); // false
 * EMAIL_DOMAIN_REGEX.test("example..com"); // false
 * ```
 */
export const EMAIL_DOMAIN_REGEX =
  /^(?!.*\.\.)(?!-)([A-Za-z0-9-]{1,63})(?<!-)(\.[A-Za-z0-9-]{1,63}(?<!-))*\.[A-Za-z]{2,}$/;

/**
 * Regular expression to validate a complete email address.
 *
 * This pattern is composed from:
 * - {@link EMAIL_LOCAL_PART_REGEX} (local part)
 * - {@link EMAIL_DOMAIN_REGEX} (domain part)
 *
 * It ensures:
 * - Valid local part before "@"
 * - Valid domain structure after "@"
 * - Full string match from start to end
 *
 * ⚠️ Note:
 * This is a practical validation regex and may not fully comply with RFC 5322.
 *
 * @example
 * ```ts
 * EMAIL_REGEX.test("user@example.com"); // true
 * EMAIL_REGEX.test("user@mail.example.com"); // true
 * EMAIL_REGEX.test(".user@example.com"); // false
 * EMAIL_REGEX.test("user..name@example.com"); // false
 * ```
 */
export const EMAIL_REGEX = new RegExp(
  `^${EMAIL_LOCAL_PART_REGEX.source.slice(1, -1)}@${EMAIL_DOMAIN_REGEX.source.slice(1, -1)}$`,
);

/**
 * Regular expression to validate a Unicode-friendly email address.
 *
 * This pattern provides a **looser, practical validation** compared to {@link EMAIL_REGEX},
 * allowing a wider range of characters (including Unicode) in the local and domain parts.
 *
 * It ensures:
 * - Local part length is between 1–64 characters
 * - Domain part length is between 1–255 characters
 * - Does not allow whitespace characters
 * - Does not allow `@` inside local or domain parts (only as separator)
 * - Does not allow double quotes (`"`) in the local part
 *
 * ⚠️ Note:
 * - This regex is intentionally permissive and does **not enforce strict domain structure**
 *   (e.g., it does not require a dot or validate TLDs).
 * - It is suitable for applications that need to support **internationalized (Unicode) emails**
 *   or flexible input validation.
 * - It may accept some technically invalid email formats under strict RFC rules.
 *
 * @example
 * ```ts
 * EMAIL_UNICODE_REGEX.test("用户@例子.公司"); // true
 * EMAIL_UNICODE_REGEX.test("δοκιμή@παράδειγμα.δοκιμή"); // true
 * EMAIL_UNICODE_REGEX.test("user@example"); // true (no TLD enforcement)
 * EMAIL_UNICODE_REGEX.test("user name@example.com"); // false (whitespace)
 * EMAIL_UNICODE_REGEX.test('user"test@example.com'); // false (quote not allowed)
 * ```
 */
export const EMAIL_UNICODE_REGEX = /^[^\s@"]{1,64}@[^\s@]{1,255}$/;

/**
 * Predefined email validation presets.
 *
 * These presets provide different levels of strictness depending on your use case.
 *
 * @example
 * ```ts
 * isEmail('user@example.com', EMAIL_REGEX_PRESETS.strict);   // true
 * isEmail('用户@例子.公司', EMAIL_REGEX_PRESETS.unicode);     // true
 * ```
 */
export const EMAIL_REGEX_PRESETS = {
  /**
   * @see {@link EMAIL_REGEX} - Validates both local and domain parts with specific character rules and structure.
   */
  strict: EMAIL_REGEX,

  /**
   * Unicode-friendly validation.
   *
   * Allows international characters and relaxed domain rules.
   *
   * @see {@link EMAIL_UNICODE_REGEX} - Validates email addresses with a focus on practical use and Unicode support, without strict domain structure enforcement.
   */
  unicode: EMAIL_UNICODE_REGEX,
} as const;
