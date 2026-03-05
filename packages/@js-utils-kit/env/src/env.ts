import { delimiter } from 'node:path';
import { env, isWindows } from '@js-utils-kit/system';

/**
 * Get a shell-compatible reference to an environment variable.
 *
 * @remarks
 * - This helper returns a string that can be used inside shell commands to reference an environment variable.
 * - The format differs between operating systems:
 *    - Unix/Linux/macOS → `$VAR`
 *    - Windows (cmd) → `%VAR%`
 * - Supported shells:
 *    - cmd
 *    - bash / sh / zsh (POSIX)
 *
 * This is useful when constructing shell commands dynamically.
 *
 *
 * @example
 * ```ts
 * envRef("PATH")
 * // Linux/macOS → "$PATH"
 * // Windows → "%PATH%"
 * ```
 */
export function envRef(
  /** Environment variable name */
  v: string,
) {
  return isWindows ? `%${v}%` : `$${v}`;
}

/**
 * Set or update an environment variable.
 *
 * @remarks
 * This function writes a value to the environment map. If the variable already exists, it will be overwritten.
 *
 * @example
 * ```ts
 * setEnv("NODE_ENV", "production");
 * ```
 */
export function setEnv(
  /** Environment variable name */
  k: string,
  /** Value to assign */
  v: string,
) {
  env[k] = v;
}

/**
 * Remove an environment variable.
 *
 * @remarks
 * - Deletes the specified key from the environment object.
 * - After removal, the variable will behave as if it was never set.
 *
 * @example
 * ```ts
 * removeEnv("DEBUG");
 * ```
 */
export function removeEnv(
  /** Environment variable name */
  k: string,
) {
  delete env[k];
}

/**
 * Check if an environment variable exists.
 *
 * @remarks
 * - This only checks whether the variable key is present in the environment object.
 * - It does not check whether the value is empty.
 *
 * @example
 * ```ts
 * if (hasEnv("CI")) {
 *   console.log("Running in CI environment");
 * }
 * ```
 */
export function hasEnv(
  /** Environment variable name */
  k: string,
) {
  return Object.hasOwn(env, k);
}

/**
 * Retrieve the value of an environment variable.
 *
 * @remarks
 * - Returns the raw string value stored in the environment object.
 * - If the variable is not defined, `undefined` will be returned.
 *
 * @example
 * ```ts
 * const port = getEnv("PORT");
 * ```
 */
export function getEnv(
  /** Environment variable name */
  k: string,
) {
  return env[k];
}

/**
 * Retrieve an environment variable with a fallback value.
 *
 * @remarks
 * If the requested variable does not exist, the provided fallback value will be returned instead.
 *
 * @example
 * ```ts
 * const port = getEnvOr("PORT", "3000");
 * ```
 */
export function getEnvOr(
  /** Environment variable name */
  k: string,
  /**  Default value if variable is not set */
  fallback: string,
) {
  return getEnv(k) ?? fallback;
}

/**
 * Append a value to an existing environment variable.
 *
 * @remarks
 * - Useful for variables like `PATH` that contain multiple entries.
 * - The platform-specific delimiter is used by default:
 *    - Windows → `;`
 *    - Unix/Linux/macOS → `:`
 *
 * @example
 * ```ts
 * appendEnv("PATH", "/custom/bin");
 * ```
 */
export function appendEnv(
  /** Environment variable name */
  k: string,
  /** Value to append */
  v: string,
  /** Separator */
  sep = delimiter,
) {
  const current = getEnv(k);
  setEnv(k, [current, v].filter(Boolean).join(sep));
}

/**
 * Prepend a value to an existing environment variable.
 *
 * @remarks
 * - Works similarly to {@link appendEnv} but places the new value at the beginning of the variable.
 * - This is often used to prioritize a binary path.
 *
 * @example
 * ```ts
 * prependEnv("PATH", "/my/bin");
 * ```
 */
export function prependEnv(
  /** Environment variable name */
  k: string,
  /** Value to prepend */
  v: string,
  /** Separator */
  sep = delimiter,
) {
  const current = getEnv(k);
  setEnv(k, [v, current].filter(Boolean).join(sep));
}

/**
 * Enable or disable a flag-style environment variable.
 *
 * @remarks
 * - When enabled, the variable is set to `"1"`.
 * - When disabled, it is removed from the environment.
 *
 * This pattern is commonly used for boolean flags in CLI tools.
 *
 * @example
 * ```ts
 * toggleEnv("DEBUG", true);
 * toggleEnv("DEBUG", false);
 * ```
 */
export function toggleEnv(
  /** Environment variable name */
  k: string,
  /** Whether the variable should be enabled */
  enabled: boolean,
) {
  if (enabled) setEnv(k, '1');
  else removeEnv(k);
}

/**
 * Check if an environment variable is empty.
 *
 * @remarks
 * A variable is considered empty when:
 *
 * - It does not exist
 * - Its value is an empty string
 *
 * @example
 * ```ts
 * if (isEnvEmpty("API_KEY")) {
 *   console.warn("API key is missing");
 * }
 * ```
 */
export function isEnvEmpty(
  /** Environment variable name */
  k: string,
) {
  const v = getEnv(k);
  return v === undefined || v === '';
}

/**
 * Set multiple environment variables at once.
 *
 * @remarks
 * This helper allows batch updates of environment variables using an object map.
 *
 * @example
 * ```ts
 * setEnvMany({
 *   NODE_ENV: "production",
 *   DEBUG: "1",
 *   PORT: "8080"
 * });
 * ```
 */
export function setEnvMany(
  /** Object containing key-value pairs */
  vars: Record<string, string>,
) {
  for (const [k, v] of Object.entries(vars)) {
    setEnv(k, v);
  }
}
