/**
 * Checks whether a given string is a valid absolute URL.
 *
 * This function uses the native `URL` constructor to determine if the input is a valid,
 * absolute URL with a supported protocol (e.g., `http`, `https`, `ftp`, etc.).
 *
 * @returns - `true` if the string is a valid absolute URL; otherwise, `false`.
 *
 * @example
 * ```ts
 * isURL('https://example.com'); // true
 * isURL('ftp://files.example.com'); // true
 * isURL('invalid-url'); // false
 * isURL('/relative/path'); // false
 * ```
 */
export function isURL(
  /** The string to validate as a URL */
  value: string,
): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}
