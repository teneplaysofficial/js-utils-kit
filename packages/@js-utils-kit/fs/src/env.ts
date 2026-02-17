/**
 * Determines whether the current runtime provides the CommonJS `__filename` variable.
 *
 * @remarks
 * - In CommonJS environments, Node.js injects a module-scoped `__filename` variable representing the absolute path of the current module file.
 * - In pure ESM environments, `__filename` does not exist.
 * - This helper allows environment-aware branching while remaining testable (e.g., via mocking in unit tests).
 *
 * @returns `true` if `__filename` is available in the current runtime; otherwise `false`.
 *
 * @example
 * ```ts
 * if (hasCommonJSFilename) {
 *   console.log("Running in CommonJS environment");
 * } else {
 *   console.log("Running in ESM environment");
 * }
 */
export const hasCommonJSFilename = typeof __filename !== 'undefined';
