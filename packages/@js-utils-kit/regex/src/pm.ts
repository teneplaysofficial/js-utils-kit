/**
 * Valid npm package name regex.
 *
 * Supports:
 * - Unscoped packages:
 *   - `react`
 *   - `react-dom`
 * - Scoped packages:
 *   - `@types/node`
 *   - `@my-org/utils`
 *
 * Rules:
 * - Lowercase only
 * - Supports numbers
 * - Supports ".", "-", "_", "~"
 * - Cannot start with ".", "-", "_", "~"
 * - Scoped packages must follow `@scope/name`
 *
 * @see https://docs.npmjs.com/cli/v11/configuring-npm/package-json#name
 */
export const NPM_PACKAGE_NAME_REGEX = /^(?:@[a-z0-9][a-z0-9-._~]*\/)?[a-z0-9][a-z0-9-._~]*$/;
