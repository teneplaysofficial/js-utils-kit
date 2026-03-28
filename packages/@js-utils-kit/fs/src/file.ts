import type { PathLike } from 'node:fs';
import { access, stat } from 'node:fs/promises';

/** Check whether a file or directory exists */
export async function exists(
  /** Absolute or relative path to check */
  path: string,
) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check whether the given path points to a file.
 *
 * @returns `true` if the path is a file, otherwise `false`.
 */
export async function isFile(
  /** Absolute or relative path to check */
  path: string,
) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

/**
 * Check whether the given path points to a directory.
 *
 * @returns `true` if the path is a directory, otherwise `false`.
 */
export async function isDirectory(
  /** Absolute or relative path to check */
  path: string,
) {
  try {
    return (await stat(path)).isDirectory();
  } catch {
    return false;
  }
}

/**
 * Get the size (in bytes) of a file system resource.
 *
 * @returns The size in bytes, or `0` if the path does not exist or cannot be accessed (failure).
 */
export async function getContentSize(
  /** Path to check */
  path: PathLike,
) {
  try {
    return (await stat(path)).size;
  } catch {
    return 0;
  }
}
