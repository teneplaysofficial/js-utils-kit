/**
 * Recursively freezes an object and all of its nested properties.
 *
 * @remarks
 * This function performs a deep, immutable freeze:
 * - Safely handles circular references
 * - Freezes symbol and non-enumerable properties
 * - Prevents repeated processing of shared references
 * - Uses `WeakSet` internally to avoid memory leaks
 *
 * @typeParam T - The type of the value to freeze
 *
 * @returns The same value, deeply frozen and typed as `Readonly<T>`
 *
 * @example Basic usage
 * ```ts
 * const config = deepFreeze({
 *   api: {
 *     url: 'https://example.com',
 *     timeout: 5000
 *   }
 * });
 *
 * // Compile-time error and runtime TypeError
 * config.api.url = 'https://evil.com';
 * ```
 *
 * @example Freezing arrays
 * ```ts
 * const list = deepFreeze([1, 2, { value: 3 }]);
 *
 * // Runtime TypeError
 * list.push(4);
 *
 * // Runtime TypeError
 * list[2].value = 10;
 * ```
 *
 * @example Circular references
 * ```ts
 * const obj: any = { name: 'circle' };
 * obj.self = obj;
 *
 * // Does not throw or recurse infinitely
 * deepFreeze(obj);
 *
 * // Runtime TypeError
 * obj.name = 'x';
 * ```
 *
 * @example Shared references
 * ```ts
 * const shared = { count: 0 };
 *
 * const state = deepFreeze({
 *   a: shared,
 *   b: shared
 * });
 *
 * // Runtime TypeError
 * state.a.count = 1;
 *
 * // Runtime TypeError
 * state.b.count = 2;
 * ```
 *
 * @example Symbol and non-enumerable properties
 * ```ts
 * const secret = Symbol('secret');
 *
 * const obj = {};
 * Object.defineProperty(obj, 'hidden', {
 *   value: { token: '123' },
 *   enumerable: false
 * });
 *
 * (obj as any)[secret] = { enabled: true };
 *
 * deepFreeze(obj);
 *
 * // Runtime TypeError
 * obj.hidden.token = '456';
 *
 * // Runtime TypeError
 * (obj as any)[secret].enabled = false;
 * ```
 *
 * @example Functions with properties
 * ```ts
 * function task() {}
 * (task as any).meta = { active: true };
 *
 * deepFreeze(task);
 *
 * // Runtime TypeError
 * (task as any).meta.active = false;
 * ```
 */
export function deepFreeze<T>(
  /**
   * The value to deeply freeze.
   */
  obj: T,
  /**
   * Internal WeakSet used to track visited objects during recursion.
   *
   * @internal
   */
  visited = new WeakSet<object>(),
): Readonly<T> {
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return obj;
  }

  const target = obj as object;

  if (visited.has(target)) {
    return obj;
  }

  visited.add(target);

  const record = target as Record<PropertyKey, unknown>;

  for (const key of Reflect.ownKeys(record)) {
    const value = record[key];

    if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
      deepFreeze(value, visited);
    }
  }

  return Object.freeze(obj);
}
