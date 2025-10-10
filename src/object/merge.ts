/**
 * Deeply merges multiple source objects into one.
 *
 * - Object properties are merged recursively.
 * - If a key exists in multiple objects:
 *   - If the value is a plain object, it is deeply merged.
 *   - If the value is an array:
 *     - If `appendArray` is `true`, arrays are concatenated.
 *     - If `appendArray` is `false` (default), later arrays replace earlier ones.
 *   - Primitive values (string, number, boolean, etc.) are overwritten by later sources.
 *
 * - Objects passed later in the list of sources have **higher priority**.
 *   For example, values in the last object will override previous ones.
 * - If you want to give **priority to a specific object**, **pass it last**.
 *
 * @example
 * ```ts
 * const defaultConfig = { env: "dev", features: ["a"], flags: { debug: true } };
 * const userConfig = { env: "prod", features: ["b"], flags: { beta: true } };
 *
 * const result = mergeObj(defaultConfig, userConfig);
 * // {
 * //   env: "prod",
 * //   features: ["b"],        // replaced, not merged
 * //   flags: { debug: true, beta: true }
 * // }
 *
 * const result2 = mergeObj(true, defaultConfig, userConfig);
 * // {
 * //   env: "prod",
 * //   features: ["a", "b"],   // arrays merged
 * //   flags: { debug: true, beta: true }
 * // }
 * ```
 *
 * @param appendArray - If `true`, arrays are concatenated. If `false` (default), arrays are replaced.
 * @param sources - One or more objects to deeply merge.
 * @returns A new object containing deeply merged keys and values.
 */
export function mergeObj(appendArray: boolean = false, ...sources: object[]): object {
  const isObject = (val: unknown): val is object => typeof val === 'object' && val !== null;
  const result: Record<string, unknown> = {};
  for (const source of sources) {
    if (!isObject(source)) continue;
    for (const key of Object.keys(source)) {
      const sourceVal = (source as Record<string, unknown>)[key];
      const resultVal = result[key];
      if (Array.isArray(sourceVal)) {
        result[key] =
          appendArray && Array.isArray(resultVal)
            ? [...(resultVal as unknown[]), ...(sourceVal as unknown[])]
            : [...(sourceVal as unknown[])];
      } else if (isObject(sourceVal) && !Array.isArray(sourceVal)) {
        result[key] =
          isObject(resultVal) && !Array.isArray(resultVal)
            ? mergeObj(appendArray, resultVal, sourceVal)
            : mergeObj(appendArray, {}, sourceVal);
      } else {
        result[key] = sourceVal;
      }
    }
  }
  return result;
}
