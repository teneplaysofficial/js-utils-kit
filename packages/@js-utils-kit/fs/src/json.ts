import { readFile, writeFile } from 'node:fs/promises';
import type { JsonReplacer } from '@js-utils-kit/types';

/**
 * Parse a JSON string into a typed value.
 *
 * @typeParam T - Expected return type of the parsed JSON.
 *
 * @remarks
 * This function does not handle errors. It will throw if the input is invalid JSON.
 *
 * @returns Parsed value cast to type `T`.
 */
export function parseJson<T = unknown>(
  /** JSON string to parse */
  v: string,
) {
  return JSON.parse(v) as T;
}

/**
 * Convert a value to a JSON string with optional formatting and transformation.
 *
 * @remarks
 * Defaults to 2-space indentation if `space` is not provided.
 *
 * @returns JSON string representation of the input value.
 *
 */
export function stringifyJson(
  /** The value to stringify */
  v: unknown,
  {
    /**
     * Number of spaces or string used for indentation.
     *
     * @default 2
     */
    space = 2,
    /**
     * A function or array to transform or filter values during serialization.
     *
     * @default null
     */
    replacer = null,
  }: {
    replacer?: JsonReplacer;
    space?: Parameters<typeof JSON.stringify>[2];
  } = {},
) {
  if (typeof replacer === 'function') return JSON.stringify(v, replacer, space);
  else if (Array.isArray(replacer)) return JSON.stringify(v, replacer, space);
  return JSON.stringify(v, null, space);
}

/**
 * Read and parse a JSON file.
 *
 * @typeParam T - Expected type of the parsed JSON content.
 *
 * @throws Will throw if the file cannot be read or contains invalid JSON.
 *
 * @returns Parsed JSON content as type `T`.
 *
 */
export async function readJsonFile<T = unknown>(
  /** Path to the JSON file */
  path: string,
) {
  const content = await readFile(path, 'utf-8');
  return parseJson<T>(content);
}

/**
 * Serialize data to JSON and write it to a file.
 *
 * @returns A promise that resolves when the file is written.
 *
 * @remarks
 * Overwrites the file if it already exists.
 */
export async function writeJsonFile(
  /** Path to the output file */
  path: string,
  /** Data to serialize and write */
  data: unknown,
  {
    /**
     * Number of spaces or string used for indentation.
     *
     * @default 2
     */
    space = 2,
    /**
     * A function or array to transform or filter values during serialization.
     *
     * @default null
     */
    replacer = null,
  }: {
    replacer?: JsonReplacer;
    space?: Parameters<typeof JSON.stringify>[2];
  } = {},
) {
  const content = stringifyJson(data, { space, replacer });
  await writeFile(path, content, 'utf-8');
}
