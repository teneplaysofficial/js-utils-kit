import { PlainObject } from '@js-utils-kit/types';
import { isArray, isObject } from '@js-utils-kit/valid';

/**
 * Configuration options for {@link deepMerge}.
 */
export interface DeepMergeOptions {
  /**
   * Defines how arrays should be handled when merging.
   *
   * - `replace` - the incoming array replaces the existing array
   * - `concat` - arrays are concatenated
   * - `merge` - arrays are merged with duplicate values removed
   *
   * @defaultValue "replace"
   */
  arrayStrategy?: 'replace' | 'merge' | 'concat';
}

const OPTION_KEYS = ['arrayStrategy'] as const satisfies readonly (keyof DeepMergeOptions)[];

function isDeepMergeOptions(value: DeepMergeOptions) {
  if (!isObject(value)) return false;

  const keys = Object.keys(value);

  return keys.every((k) => (OPTION_KEYS as readonly string[]).includes(k));
}

/**
 * Deeply merges multiple objects into a new object.
 *
 * Later objects override properties from earlier ones.
 *
 * @remarks
 * - The merge is **immutable** input objects are never modified.
 * - Primitive values from later objects override earlier values.
 * - Nested objects are merged recursively.
 * - Arrays are handled based on {@link DeepMergeOptions.arrayStrategy | arrayStrategy}.
 *
 * @typeParam T - The object type being merged.
 *
 * @returns A new object containing the merged properties.
 *
 * @example Basic merge
 * ```ts
 * deepMerge(
 *   { a: 1 },
 *   { b: 2 }
 * )
 *
 * // Result
 * { a: 1, b: 2 }
 * ```
 *
 * @example Nested object merge
 * ```ts
 * deepMerge(
 *   { config: { port: 3000 } },
 *   { config: { host: "localhost" } }
 * )
 *
 * // Result
 * { config: { port: 3000, host: "localhost" } }
 * ```
 *
 * @example Array concatenation
 * ```ts
 * deepMerge(
 *   { items: [1, 2] },
 *   { items: [3] },
 *   { arrayStrategy: "concat" }
 * )
 *
 * // Result
 * { items: [1, 2, 3] }
 * ```
 *
 * @example Array merge (deduplicated)
 * ```ts
 * deepMerge(
 *   { items: [1, 2] },
 *   { items: [2, 3] },
 *   { arrayStrategy: "merge" }
 * )
 *
 * // Result
 * { items: [1, 2, 3] }
 * ```
 */
export function deepMerge<T extends PlainObject>(
  /**
   * Objects to merge.
   *
   * The last argument may optionally be a {@link DeepMergeOptions} object.
   */
  ...params: (T | DeepMergeOptions)[]
): T {
  let options: DeepMergeOptions = {};

  if (params.length > 0 && isDeepMergeOptions(params[params.length - 1])) {
    options = params.pop() as DeepMergeOptions;
  }

  const result: PlainObject = {};
  const { arrayStrategy = 'replace' } = options;

  for (const param of params) {
    if (!isObject(param)) continue;

    for (const key of Object.keys(param)) {
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') continue;

      const incoming = (param as PlainObject)[key];
      const existing = result[key];

      // Array
      if (isArray(existing) && isArray(incoming)) {
        switch (arrayStrategy) {
          case 'concat':
            result[key] = [...(existing as unknown[]), ...(incoming as unknown[])];
            break;

          case 'merge':
            result[key] = [...new Set([...(existing as unknown[]), ...(incoming as unknown[])])];
            break;

          case 'replace':
          default:
            result[key] = [...(incoming as unknown[])];
        }

        continue;
      }

      // Object
      if (isObject(incoming)) {
        result[key] =
          isObject(existing) && !Array.isArray(existing)
            ? deepMerge(existing as PlainObject, incoming as PlainObject, {
                arrayStrategy,
              })
            : deepMerge({}, incoming as PlainObject, {
                arrayStrategy,
              });

        continue;
      }

      result[key] = incoming;
    }
  }

  return result as T;
}
