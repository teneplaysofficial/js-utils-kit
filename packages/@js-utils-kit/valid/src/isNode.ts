/**
 * Checks if the current runtime environment is Node.js.
 *
 * This function is useful to conditionally execute server-side logic.
 * It detects the Node.js environment by verifying the presence of the
 * global `process` object and its `versions.node` property.
 *
 * @returns `true` if running in Node.js, otherwise `false`.
 *
 * @example
 * ```ts
 * if (isNode()) {
 *   console.log('Running in Node.js environment');
 * }
 * ```
 *
 * @see {@link https://nodejs.org/api/process.html | Node.js process documentation}
 */
export function isNode(): boolean {
  return (
    typeof process !== 'undefined' && process.versions !== null && process.versions.node !== null
  );
}
