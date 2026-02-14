import path from 'path';

/**
 * Converts a file system path to POSIX format.
 *
 * @remarks
 * - On Windows, all backslashes (`\`) are replaced with forward slashes (`/`).
 * - On other platforms, the input is returned with normalized forward slashes.
 *
 * @returns The path using POSIX separators (`/`).
 *
 * @example
 * ```ts
 * toPosixPath('C:\\Users\\TenE\\project')
 * // => 'C:/Users/TenE/project'
 * ```
 *
 * @example
 * ```ts
 * toPosixPath('src\\utils\\file.ts')
 * // => 'src/utils/file.ts'
 * ```
 */
export function toPosixPath(
  /** The path to convert */
  p: string,
): string {
  return p.replace(/\\/g, '/');
}

/**
 * Converts a file system path to Windows (Win32) format.
 *
 * On POSIX systems (Linux/macOS), all forward slashes (`/`) are replaced with backslashes (`\`).
 *
 * @returns The path using Windows separators (`\`).
 *
 * @example
 * ```ts
 * toWinPath('src/utils/file.ts')
 * // => 'src\\utils\\file.ts'
 * ```
 *
 * @example
 * ```ts
 * toWinPath('/usr/local/bin')
 * // => '\\usr\\local\\bin'
 * ```
 */
export function toWinPath(
  /** The path to convert */
  p: string,
): string {
  return p.replace(/\//g, '\\');
}

/**
 * Converts a file system path to the current platform-specific format.
 *
 * This replaces both forward slashes (`/`) and backslashes (`\`) with the platform's separator (`path.sep`).
 *
 * - Windows → `\`
 * - macOS/Linux → `/`
 *
 * @returns The path using the current OS separator.
 *
 * @example Mixed Separators
 * ```ts
 * toPlatformPath('src/utils/file.ts')
 * // On Windows: 'src\\utils\\file.ts'
 * // On POSIX:   'src/utils/file.ts'
 * ```
 */
export function toPlatformPath(
  /** The path to convert */
  p: string,
): string {
  return p.replace(/[/\\]/g, path.sep);
}
