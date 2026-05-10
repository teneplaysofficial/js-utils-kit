/**
 * Valid npm package name regex.
 *
 * @remarks
 * This regex covers the most common npm package naming rules, but does not fully replicate npm's internal validation logic.
 *
 * Additional runtime validation may still be required for:
 * - Reserved names:
 *   - `node_modules`
 *   - `favicon.ico`
 * - Builtin Node.js module names
 * - Legacy npm compatibility warnings
 *
 * Supports validation for both scoped and unscoped npm package names.
 *
 * Supported formats:
 * - Unscoped packages:
 *   - `react`
 *   - `react-dom`
 *   - `pkg_name`
 *   - `pkg.name`
 *
 * - Scoped packages:
 *   - `@types/node`
 *   - `@my-org/utils`
 *   - `@scope/pkg-name`
 *
 * Rules:
 * - Must be between `1` and `214` characters long
 * - Lowercase characters only
 * - Supports:
 *   - letters (`a-z`)
 *   - numbers (`0-9`)
 *   - dot (`.`)
 *   - hyphen (`-`)
 *   - underscore (`_`)
 * - Cannot start with:
 *   - `.`
 *   - `-`
 *   - `_`
 * - Scoped packages must follow the format:
 *   - `@scope/name`
 * - Prevents empty or malformed scopes
 * - Prevents consecutive slashes (`//`)
 * - Does not allow URL-unsafe characters such as:
 *   - `~`
 *   - `!`
 *   - `*`
 *   - spaces
 *   - `?`
 *   - `%`
 *
 * @see https://docs.npmjs.com/cli/v11/configuring-npm/package-json#name
 * @see https://github.com/npm/validate-npm-package-name
 */
export const NPM_PACKAGE_NAME_REGEX =
  /^(?=.{1,214}$)(?![._-])(?!.*\/{2})(?:@[a-z0-9]+(?:[._-][a-z0-9]+)*\/)?[a-z0-9]+(?:[._-][a-z0-9]+)*$/;
