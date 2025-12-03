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

  const parts = value.split('@');

  if (parts.length !== 2) return false;

  const [local, domain] = parts;

  if (local.length === 0 || local.length > 64) return false;

  if (domain.length === 0 || domain.length > 255) return false;

  const emailRegex = /^[a-zA-Z0-9_%+-]+(\.[a-zA-Z0-9_%+-]+)*$/;
  const domainRegex =
    /^(?!.*\.\.)(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.[A-Za-z0-9-]{1,63}(?<!-))*\.[A-Za-z]{2,}$/;

  if (!emailRegex.test(local)) return false;
  if (!domainRegex.test(domain)) return false;

  return true;
}
