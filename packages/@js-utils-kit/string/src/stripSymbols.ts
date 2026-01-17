/**
 * Removes or replaces common symbol characters from a string.
 *
 * @remarks
 * - Strips symbols like `- _ @ ! $ % ^ & # * ( ) + = , . ; : ' " < > ? / \ | [ ] { }`.
 * - Keeps letters, numbers, and spaces intact.
 * - By default, removes symbols (replaces with `""`).
 *
 * @returns A new string with symbols removed or replaced.
 *
 * @example
 * ```ts
 * stripSymbols("hello-world!");              // "helloworld"
 * stripSymbols("hello-world!", " ");         // "hello world "
 * stripSymbols("user_name@test", "_");       // "user_nametest"
 * stripSymbols("symbols-only!!!", "*");      // "symbols-only***"
 * ```
 */
export function stripSymbols(
  /** The input string */
  str: string,
  /**
   * Optional replacement string for removed symbols.
   *
   * @default ""
   */
  replacement: string = '',
): string {
  return str.replace(/[^\p{L}\p{N}\s]/gu, replacement);
}
