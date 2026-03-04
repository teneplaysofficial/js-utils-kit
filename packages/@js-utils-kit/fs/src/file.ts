import { access } from 'node:fs/promises';

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
