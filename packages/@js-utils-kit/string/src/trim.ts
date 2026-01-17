import { Trim } from '@js-utils-kit/types';

/**
 * Trims whitespace from a string with methods for leading and trailing and normalizing whitespace.
 *
 * @param str - The string to trim.
 *
 * @returns The string with leading and trailing whitespace removed.
 *
 * @remarks
 * - The main callable form behaves like {@link String.prototype.trim}, removing whitespace from both ends.
 * - `.start` removes only leading whitespace (like {@link String.prototype.trimStart}).
 * - `.end` removes only trailing whitespace (like {@link String.prototype.trimEnd}).
 * - `.normalizeWhitespace` trims the string and replaces any sequence of whitespace characters with a single space.
 *
 * @default 'trims both sides'
 *
 * @example
 * ```ts
 * // Trim both sides
 * console.log(trim("  hello  ")); // "hello"
 * console.log(trim("")); // ""
 * console.log(trim("hello")); // "hello"
 *
 * // Trim leading whitespace
 * console.log(trim.start("  hello  ")); // "hello  "
 * console.log(trim.start("")); // ""
 * console.log(trim.start("hello")); // "hello"
 *
 * // Trim trailing whitespace
 * console.log(trim.end("  hello  ")); // "  hello"
 * console.log(trim.end("")); // ""
 * console.log(trim.end("hello")); // "hello"
 *
 * // Normalize whitespace
 * console.log(trim.normalizeWhitespace("  hello   world  ")); // "hello world"
 * console.log(trim.normalizeWhitespace("hello\t  world")); // "hello world"
 * console.log(trim.normalizeWhitespace("")); // ""
 * ```
 */
export const trim: Trim = Object.assign((str: string) => str.trim(), {
  start: (str: string): string => {
    return str.trimStart();
  },
  end: (str: string): string => {
    return str.trimEnd();
  },
  normalizeWhitespace: (str: string): string => {
    return str.trim().replace(/\s+/g, ' ');
  },
});
