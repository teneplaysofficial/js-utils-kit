import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Returns the absolute file path of a module.
 *
 * @remarks
 * This utility supports both:
 * - **ESM** → pass `import.meta.url`
 * - **CommonJS** → pass `__filename`
 *
 * The path MUST be explicitly provided. Automatic runtime detection is intentionally not performed to avoid incorrect module resolution.
 *
 * @returns Absolute path to the provided module file.
 *
 * @throws {Error} If `metaUrlOrPath` is not provided.
 *
 * @example ESM usage
 * ```ts
 * const file = locateModuleFile(import.meta.url);
 * console.log(file);
 * ```
 *
 * @example CommonJS usage
 * ```ts
 * const file = locateModuleFile(__filename);
 * console.log(file);
 * ```
 */
export function locateModuleFile(
  /** `import.meta.url` (ESM) or `__filename` (CJS) */
  metaUrlOrPath: string,
): string {
  if (!metaUrlOrPath) {
    throw new Error('locateModuleFile requires import.meta.url (ESM) or __filename (CJS).');
  }

  return metaUrlOrPath.startsWith('file:') ? fileURLToPath(metaUrlOrPath) : metaUrlOrPath;
}

/**
 * Returns the absolute directory path of a module.
 *
 * @remarks
 * Internally derives the directory from {@link locateModuleFile}.
 *
 * @returns Absolute directory path.
 *
 * @example ESM
 * ```ts
 * const dir = locateModuleDirectory(import.meta.url);
 * ```
 *
 * @example CommonJS
 * ```ts
 * const dir = locateModuleDirectory(__filename);
 * ```
 */

export function locateModuleDirectory(
  /** `import.meta.url` (ESM) or `__filename` (CJS) */
  metaUrlOrPath: string,
) {
  return path.dirname(locateModuleFile(metaUrlOrPath));
}

/**
 * Resolves a path relative to the provided module's directory.
 *
 * @remarks
 * Useful for loading internal assets such as:
 * - `.hbs` templates
 * - JSON files
 * - SQL schemas
 * - bundled static resources
 *
 * Unlike `process.cwd()`, this resolves relative to the module
 * file location, making it safe for usage inside `node_modules`.
 *
 * @returns Absolute resolved path.
 *
 * @throws {Error}
 * If module path is not provided.
 *
 * @example ESM
 * ```ts
 * const templatePath = resolveModuleRelative(
 *   "../templates/welcome.hbs",
 *   import.meta.url
 * );
 * ```
 *
 * @example CommonJS
 * ```ts
 * const templatePath = resolveModuleRelative(
 *   "../templates/welcome.hbs",
 *   __filename
 * );
 * ```
 */
export function resolveModuleRelative(
  /** Path relative to the module directory */
  relativePath: string,
  /** `import.meta.url` (ESM) or `__filename` (CJS) */
  metaUrlOrPath: string,
) {
  return path.resolve(locateModuleDirectory(metaUrlOrPath), relativePath);
}
