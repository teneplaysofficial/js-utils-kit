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
