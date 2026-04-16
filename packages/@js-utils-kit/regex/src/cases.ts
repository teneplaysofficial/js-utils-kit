/**
 * Matches strict camelCase strings.
 *
 * A valid camelCase string:
 * - Starts with one or more lowercase letters
 * - Contains at least one uppercase transition
 *
 * @example
 * ```ts
 * CAMEL_CASE_REGEX.test("helloWorld"); // true
 * CAMEL_CASE_REGEX.test("myVar1Name"); // true
 *
 * CAMEL_CASE_REGEX.test("hello"); // false
 * CAMEL_CASE_REGEX.test("HelloWorld"); // false
 * CAMEL_CASE_REGEX.test("hello_world"); // false
 * ```
 */
export const CAMEL_CASE_REGEX = /^[a-z][a-z0-9]+(?:[A-Z][a-z0-9]+)+$/;

/**
 * Matches strict kebab-case strings.
 *
 * A valid kebab-case string:
 * - Contains only lowercase letters (`a-z`) and numbers (`0-9`)
 * - Words are separated by single hyphens (`-`)
 * - Does not start or end with a hyphen
 * - Does not contain consecutive hyphens
 *
 * Pattern:
 * - `^[a-z0-9]+`           → starts with lowercase letters or numbers
 * - `(?:-[a-z0-9]+)*`      → zero or more `-word` groups
 * - `$`                    → end of string
 *
 * @example
 * ```ts
 * KEBAB_CASE_REGEX.test("hello-world"); // true
 * KEBAB_CASE_REGEX.test("my-variable-123"); // true
 *
 * KEBAB_CASE_REGEX.test("Hello-world"); // false
 * KEBAB_CASE_REGEX.test("hello_world"); // false
 * KEBAB_CASE_REGEX.test("-hello-world"); // false
 * KEBAB_CASE_REGEX.test("hello--world"); // false
 * ```
 */
export const KEBAB_CASE_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Matches strict PascalCase strings.
 *
 * A valid PascalCase string:
 * - Starts with an uppercase letter
 * - Contains one or more capitalized words
 * - Each word starts with uppercase followed by lowercase letters or numbers
 *
 * @example
 * ```ts
 * PASCAL_CASE_REGEX.test("HelloWorld"); // true
 * PASCAL_CASE_REGEX.test("MyVar123"); // true
 *
 * PASCAL_CASE_REGEX.test("Hello"); // false
 * PASCAL_CASE_REGEX.test("helloWorld"); // false
 * PASCAL_CASE_REGEX.test("HELLO"); // false
 * ```
 */
export const PASCAL_CASE_REGEX = /^[A-Z][a-z0-9]+(?:[A-Z][a-z0-9]+)+$/;

/**
 * Matches strict snake_case strings.
 *
 * A valid snake_case string:
 * - Contains only lowercase letters (`a-z`) and numbers (`0-9`)
 * - Words are separated by single underscores (`_`)
 * - Does not start or end with an underscore
 * - Does not contain consecutive underscores
 *
 * @example
 * ```ts
 * SNAKE_CASE_REGEX.test("hello_world"); // true
 * SNAKE_CASE_REGEX.test("my_var_123"); // true
 * ```
 *
 * ```ts
 * SNAKE_CASE_REGEX.test("Hello_world"); // false
 * SNAKE_CASE_REGEX.test("hello-world"); // false
 * SNAKE_CASE_REGEX.test("_hello_world"); // false
 * SNAKE_CASE_REGEX.test("hello__world"); // false
 * ```
 */
export const SNAKE_CASE_REGEX = /^[a-z0-9]+(?:_[a-z0-9]+)*$/;
