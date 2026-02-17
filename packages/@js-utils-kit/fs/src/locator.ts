import path from 'path';
import { fileURLToPath } from 'url';
import { hasCommonJSFilename } from './env';

/**
 * Returns the absolute file path of the currently executing module.
 *
 * @remarks
 * This utility works in both:
 * - **ESM** → pass `import.meta.url`
 * - **CommonJS** → falls back to `__filename`
 *
 * It is safe for npm packages and resolves based on the physical file location.
 *
 * @returns Absolute path to the current module file.
 *
 * @throws {Error} If executed in ESM without providing `metaUrl`.
 *
 * @example ESM usage
 * ```ts
 * const file = locateModuleFile(import.meta.url);
 * console.log(file);
 * ```
 *
 * @example CommonJS usage
 * ```ts
 * const file = locateModuleFile();
 * console.log(file);
 * ```
 */
export function locateModuleFile(
  /** `import.meta.url` when using ESM */
  metaUrl?: string,
): string {
  if (metaUrl) {
    return fileURLToPath(metaUrl);
  }

  if (hasCommonJSFilename) {
    return __filename;
  }

  throw new Error('Unable to determine module file path; Pass import.meta.url in ESM.');
}

/**
 * Returns the absolute directory path of the currently executing module.
 *
 * @remarks
 * Internally derives the path from {@link locateModuleFile}.
 *
 * @returns Absolute directory path of the current module.
 *
 * @example ESM
 * ```ts
 * const dir = locateModuleDirectory(import.meta.url);
 * ```
 *
 * @example CommonJS
 * ```ts
 * const dir = locateModuleDirectory();
 * ```
 */
export function locateModuleDirectory(
  /** `import.meta.url` when using ESM */
  metaUrl?: string,
) {
  return path.dirname(locateModuleFile(metaUrl));
}

/**
 * Resolves a relative path from the current module's directory.
 *
 * @remarks
 * Useful for loading internal assets such as:
 * - `.hbs` templates
 * - JSON files
 * - SQL schemas
 * - static resources bundled in npm packages
 *
 * Unlike `process.cwd()`, this resolves relative to the module file location, making it safe inside `node_modules`.
 *
 * @returns Absolute resolved path.
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
 * const templatePath = resolveModuleRelative("../templates/welcome.hbs");
 * ```
 */
export function resolveModuleRelative(
  /** Relative path from the current module file */
  relativePath: string,
  /** `import.meta.url` when using ESM */
  metaUrl?: string,
) {
  return path.resolve(locateModuleDirectory(metaUrl), relativePath);
}
