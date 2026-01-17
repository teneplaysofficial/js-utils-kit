/**
 * Checks if the current runtime environment is a browser.
 *
 * This function helps detect whether code is executing in a web browser
 * by confirming the existence of the global `window` and `document` objects.
 *
 * @returns `true` if running in a browser, otherwise `false`.
 *
 * @example
 * ```ts
 * if (isBrowser()) {
 *   console.log('Running in a browser environment');
 * }
 * ```
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined';
}
