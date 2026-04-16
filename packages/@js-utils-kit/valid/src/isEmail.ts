import { EMAIL_DOMAIN_REGEX, EMAIL_LOCAL_PART_REGEX } from '@js-utils-kit/regex';

/**
 * Checks whether a given string is a valid email address.
 *
 * @remarks
 * This function uses a practical regular expression to validate email addresses,
 * allowing most common formats while ignoring edge cases defined by full RFC 5322.
 * It requires the presence of an `@` symbol and at least one `.` after it.
 *
 * **Limits enforced**:
 * - Local part (before `@`): 1–64 characters
 * - Domain part (after `@`): 1–255 characters
 * - Total email length: ≤ 254 characters
 *
 *
 * @throws {TypeError} Throws if value is not a string.
 *
 * @returns - `true` if the string is a valid email; otherwise, `false`.
 *
 * @example
 * ```ts
 * isEmail('user@example.com'); // true
 * isEmail('first.last@college.university.in'); // true
 * isEmail('invalid-email'); // false
 * isEmail('name@domain'); // false
 * ```
 */
export function isEmail(
  /** The string to validate as an email address */
  value: string,
): boolean {
  if (typeof value !== 'string') throw new TypeError('Expected a string');

  if (value.length > 254) return false;

  const [local, domain, ...rest] = value.split('@');

  if (!local || !domain || rest.length) return false;

  return (
    local.length <= 64 &&
    domain.length <= 255 &&
    EMAIL_LOCAL_PART_REGEX.test(local) &&
    EMAIL_DOMAIN_REGEX.test(domain)
  );
}
