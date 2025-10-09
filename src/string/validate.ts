/**
 * Determines whether the provided value is a string.
 *
 * This function returns `true` if the input is a non-null, non-undefined
 * primitive string. It acts as a type guard, so TypeScript will narrow
 * the type to `string` when used in conditionals.
 *
 * @template T - The type of the input value.
 * @param value - The value to be checked.
 * @returns - Whether the value is a string (`true`) or not (`false`).
 *
 * @example
 * ```ts
 * isString("hello"); // true
 * isString(123);     // false
 * isString(null);    // false
 * isString(undefined); // false
 *
 * const value: unknown = "test";
 * if (isString(value)) {
 *   console.log(value.toUpperCase());
 * }
 * ```
 */
export function isString<T>(value: T): boolean {
  return value !== null && value !== undefined && typeof value === 'string';
}

/**
 * Determines whether the given value is a non-empty string.
 *
 * This function first checks if the input is a string using {@link isString}.
 * If it is not a string, the function returns `false`.
 * If it is a string, it then checks whether the string contains any non-empty content.
 *
 * By default, the function trims the string before checking its length,
 * which means strings containing only whitespace (e.g., `"   "`) will be considered empty.
 * This behavior can be controlled using the `trim` parameter.
 *
 * @template T - The type of the value being checked.
 *
 * @param value - The value to validate as a non-empty string.
 * @param trim - Whether to trim whitespace from the string before checking its length.
 *               Defaults to `true`.
 *
 * @returns - A boolean indicating whether the input is a non-empty string.
 *
 * @example
 * ```ts
 * isNonEmptyString('hello'); // true
 * isNonEmptyString('   '); // false (trim is true by default)
 * isNonEmptyString('   ', false); // true (whitespace is counted)
 * isNonEmptyString(123); // false
 * isNonEmptyString(null); // false
 * ```
 */
export function isNonEmptyString<T>(value: T, trim = true): boolean {
  if (!isString(value)) return false;

  return typeof value === 'string' && (trim ? value.trim().length > 0 : value.length > 0);
}

/**
 * Checks whether a given string is a valid absolute URL.
 *
 * This function uses the native `URL` constructor to determine if the input is a valid,
 * absolute URL with a supported protocol (e.g., `http`, `https`, `ftp`, etc.).
 *
 * @param value - The string to validate as a URL.
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
export function isURL(value: string): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

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
 * @param value - The string to validate as an email address.
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
export function isEmail(value: string): boolean {
  if (typeof value !== 'string') throw new TypeError('Expected a string');

  if (value.length > 254) return false;

  const parts = value.split('@');

  if (parts.length !== 2) return false;

  const [local, domain] = parts;

  if (local.length === 0 || local.length > 64) return false;

  if (domain.length === 0 || domain.length > 255) return false;

  const emailRegex = /^[a-zA-Z0-9._%+-]+(\.[a-zA-Z0-9._%+-]+)*$/;
  const domainRegex =
    /^(?!.*\.\.)(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.[A-Za-z0-9-]{1,63}(?<!-))*\.[A-Za-z]{2,}$/;

  if (!emailRegex.test(local)) return false;
  if (!domainRegex.test(domain)) return false;

  return true;
}

/**
 * Checks if a string contains only alphabetic characters (A–Z, a–z).
 *
 * @param value - The string to check.
 * @returns - `true` if the string contains only letters; otherwise, `false`.
 *
 * @example
 * ```ts
 * isAlphabetic("Hello"); // true
 * isAlphabetic("world123"); // false
 * isAlphabetic("Test!"); // false
 * ```
 */
export function isAlphabetic(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value);
}

/**
 * Checks whether a given string represents a valid numeric value.
 *
 * This function attempts to convert the input string to a number using
 * both `Number()` and `parseFloat()`. It returns `true` only if both
 * conversions do not result in `NaN`, ensuring that the input is
 * a fully numeric string.
 *
 * Accepts integers, decimals, scientific notation (e.g. "1e5"), and
 * ignores surrounding whitespace. Does not allow trailing or embedded characters
 * like "123abc" or "abc123".
 *
 * @param value - The string to validate.
 * @returns - `true` if the string represents a valid number; otherwise, `false`.
 *
 * @example
 * ```ts
 * isNumericString("42"); // true
 * isNumericString("-3.14"); // true
 * isNumericString("1e5"); // true
 * isNumericString("  123 "); // true
 * isNumericString("123abc"); // false
 * isNumericString("abc123"); // false
 * ```
 * See also:
 * - {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number Number()}
 * - {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat parseFloat()}
 * - {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN isNaN()}
 */
export function isNumericString(value: string): boolean {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}

/**
 * Checks if a string starts with an uppercase letter.
 * @param value - The input string to check.
 * @returns True if the first character is uppercase, false otherwise.
 * @example
 * ```ts
 * startsWithUppercase('Hello') // true
 * startsWithUppercase('world') // false
 * ```
 */
export function startsWithUppercase(value: string): boolean {
  return /^[A-Z]/.test(value);
}

/**
 * Checks if a string ends with any Unicode punctuation character.
 *
 * @param value - The string to check.
 * @returns True if the string ends with a punctuation character.
 * @example
 * ```ts
 * endsWithPunctuation("Hi!") // true
 * endsWithPunctuation("Hello—") // true
 * endsWithPunctuation("Okay") // false
 * ```
 */
export function endsWithPunctuation(value: string): boolean {
  return /[\p{P}]$/u.test(value);
}

/**
 * Checks if a string contains any whitespace.
 * @param value - The string to check.
 * @returns True if the string contains whitespace.
 * @example
 * ```ts
 * containsWhitespace("Hello world") // true
 * containsWhitespace("Nowordspace") // false
 * ```
 */
export function containsWhitespace(value: string): boolean {
  return /\s/.test(value);
}

/**
 * Checks if a string is in camelCase format.
 * @param value - The input string.
 * @returns True if the string is camelCase.
 * @example
 * ```ts
 * isCamelCase("helloWorld") // true
 * isCamelCase("HelloWorld") // false
 * ```
 */
export function isCamelCase(value: string): boolean {
  return /^[a-z][a-zA-Z0-9]*$/.test(value);
}

/**
 * Checks if a string is in PascalCase format.
 * @param value - The input string.
 * @returns True if the string is PascalCase.
 * @example
 * ```ts
 * isPascalCase("HelloWorld") // true
 * isPascalCase("helloWorld") // false
 * ```
 */
export function isPascalCase(value: string): boolean {
  return /^[A-Z][a-zA-Z0-9]*$/.test(value);
}

/**
 * Checks if a string is in kebab-case format.
 * @param value - The input string.
 * @returns True if the string is kebab-case.
 * @example
 * ```ts
 * isKebabCase("hello-world") // true
 * isKebabCase("hello_world") // false
 * ```
 */
export function isKebabCase(value: string): boolean {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(value);
}

/**
 * Checks if a string is in snake_case format.
 * @param value - The input string.
 * @returns True if the string is snake_case.
 * @example
 * ```ts
 * isSnakeCase("hello_world") // true
 * isSnakeCase("hello-world") // false
 * ```
 */
export function isSnakeCase(value: string): boolean {
  return /^[a-z0-9]+(_[a-z0-9]+)*$/.test(value);
}

/**
 * Checks if a string contains only uppercase letters.
 * @param value - The input string.
 * @returns True if all letters are uppercase.
 * @example
 * ```ts
 * isUpperCase("HELLO") // true
 * isUpperCase("Hello") // false
 * ```
 */
export function isUpperCase(value: string): boolean {
  return /^[A-Z]+$/.test(value);
}

/**
 * Checks if a string contains only lowercase letters.
 * @param value - The input string.
 * @returns True if all letters are lowercase.
 * @example
 * ```ts
 * isLowerCase("hello") // true
 * isLowerCase("Hello") // false
 * ```
 */
export function isLowerCase(value: string): boolean {
  return /^[a-z]+$/.test(value);
}
