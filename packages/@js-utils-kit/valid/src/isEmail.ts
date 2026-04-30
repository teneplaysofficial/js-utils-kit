import { EMAIL_REGEX_PRESETS } from '@js-utils-kit/regex';

/**
 * Checks whether a given string is a valid email address.
 *
 * @remarks
 * This function validates the input using a practical regular expression ({@link EMAIL_REGEX_PRESETS.strict}) that supports most common email formats while intentionally ignoring edge cases defined by full RFC 5322.
 *
 * Validation is fully delegated to the provided regex, which ensures:
 * - A valid local part and domain structure
 * - Presence of a single `@` symbol
 * - Proper domain formatting (e.g., contains a dot and valid labels)
 *
 * **Limits enforced**:
 * - Total email length: ≤ 254 characters
 *
 * @throws {TypeError} Throws if `value` is not a string.
 *
 * @returns `true` if the string is a valid email; otherwise, `false`.
 *
 * @example
 * ```ts
 * isEmail('user@example.com'); // true
 * isEmail('first.last@college.university.in'); // true
 * isEmail('invalid-email'); // false
 * isEmail('name@domain'); // false
 * ```
 *
 * @example
 * ```ts Custom regex
 * const ONLY_EXAMPLE_DOMAIN = /^[^@]+@example\.com$/;
 * isEmail('user@example.com', ONLY_EXAMPLE_DOMAIN); // true
 * isEmail('user@gmail.com', ONLY_EXAMPLE_DOMAIN); // false
 * ```
 *
 * @see {@link EMAIL_REGEX_PRESETS.strict} for the default regular expression used in validation.
 */
export function isEmail(
  /** The string to validate as an email address */
  value: string,
  /**
   * Custom regular expression to use for validation against provided value.
   *
   * Defaults to {@link EMAIL_REGEX_PRESETS.strict}, which is designed to cover common email formats while excluding complex edge cases.
   */
  regex: RegExp = EMAIL_REGEX_PRESETS.strict,
): boolean {
  if (typeof value !== 'string') throw new TypeError('Expected a string');

  if (value.length > 254) return false;

  return regex.test(value);
}
