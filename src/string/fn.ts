/**
 * Splits a string into an array of substrings using a given delimiter.
 *
 * @remarks
 * - Defaults to splitting by whitespace using `/\s+/`.
 * - Does not trim leading/trailing spaces unless explicitly passed.
 * - Consecutive delimiters will produce empty strings unless filtered later.
 *
 * @returns An array of substrings.
 *
 * @example
 * ```ts
 * splitString("a b  c");      // ["a", "b", "c"]
 * splitString("a,b,c", ",");  // ["a", "b", "c"]
 * splitString("a1b2c3", /\d/); // ["a", "b", "c", ""]
 * ```
 */
export function splitString(
  /** The input string to split. */
  str: string,
  /**
   * The delimiter (string or RegExp)
   *
   * @default whitespace  `/\s+/`
   */
  val: string | RegExp = /\s+/,
): string[] {
  return str.split(val);
}

/**
 * Counts characters in a string.
 *
 * @remarks
 * - If `char` is provided, only that character’s occurrences are counted.
 * - If `char` is omitted, the function counts the number of substrings returned by {@link splitString} (similar to a word count).
 *
 * @returns Number of characters or character occurrences.
 *
 * @example
 * ```ts
 * countChars("banana");       // 6
 * countChars("banana", "a");  // 3
 * countChars("banana", "n");  // 2
 * ```
 */
export function countChars(
  /** The input string. */
  str: string,
  /** Optional character to count. */
  char?: string,
): number {
  if (char) {
    return [...str].filter((c) => c === char).length;
  }

  return splitString(str).length;
}

/**
 * Counts the number of words in a string.
 *
 * @returns Number of words in the string.
 *
 * @example
 * ```ts
 * countWords("js utils kit");         // 3
 * countWords("   js   utils   kit");  // 3
 * countWords("");                     // 0
 * ```
 */
export function countWords(
  /** The input string */
  str: string,
): number {
  return splitString(str.trim()).length;
}

/**
 * Counts how many times a substring occurs within a string.
 *
 * @remarks
 * - Overlapping substrings are not double-counted.
 * - Returns `0` if the substring is not found.
 *
 * @returns Number of times `sub` occurs in `str`.
 *
 * @example
 * ```ts
 * countSubstring("lololol", "lo"); // 3
 * countSubstring("aaaaa", "a");    // 5
 * countSubstring("hello", "z");    // 0
 * ```
 */
export function countSubstring(
  /** The input string. */
  str: string,
  /** The substring to count. */
  sub: string,
): number {
  return splitString(str, sub).length - 1;
}

/**
 * Builds a frequency map of characters in a string.
 *
 * @remarks
 * - Returns an object where keys are characters and values are counts.
 * - Case-sensitive by default.
 *
 * @returns A mapping of each character to its frequency.
 *
 * @example
 * ```ts
 * countFrequencies("banana");
 * // { b: 1, a: 3, n: 2 }
 *
 * countFrequencies("");
 * // {}
 * ```
 */
export function countFrequencies(
  /** The input string. */
  str: string,
): Record<string, number> {
  return [...str].reduce(
    (map, char) => {
      map[char] = (map[char] || 0) + 1;
      return map;
    },
    {} as Record<string, number>,
  );
}

/**
 * Counts the number of lines in a string.
 *
 * @remarks
 * - Handles Unix (`\n`), Windows (`\r\n`), and old Mac (`\r`) line endings.
 *
 * @returns Number of lines in the string.
 *
 * @example
 * ```ts
 * countLines("a\nb\nc");     // 3
 * countLines("a\r\nb\r\nc"); // 3
 * countLines("hello");       // 1
 * ```
 */
export function countLines(
  /** The input string. */
  str: string,
): number {
  return splitString(str, /\r\n|\r|\n/).length;
}

/**
 * Returns an array of unique characters from a string.
 *
 * @remarks
 * - Preserves order of first appearance.
 *
 * @returns Array of unique characters.
 *
 * @example
 * ```ts
 * uniqueChars("banana"); // ["b", "a", "n"]
 * uniqueChars("");       // []
 * ```
 */
export function uniqueChars(
  /** The input string. */
  str: string,
): string[] {
  return [...new Set(str)];
}

/**
 * Finds the length of the longest word in a string.
 *
 * @remarks
 * - Words are separated by whitespace (`/\s+/`).
 * - Returns `0` if the string is empty or contains no words.
 *
 * @returns Length of the longest word.
 *
 * @example
 * ```ts
 * longestWordLength("js utils kit");              // 5
 * longestWordLength("short   longerword   mid"); // 10
 * longestWordLength("hello");                    // 5
 * longestWordLength("");                         // 0
 * ```
 */
export function longestWordLength(
  /** The input string. */
  str: string,
): number {
  return splitString(str).reduce((max, w) => Math.max(max, w.length), 0);
}

/**
 * Returns the length of the shortest word in a string.
 *
 * @returns The length of the shortest word, or `0` if the string is empty.
 *
 * @remarks
 * - Multiple spaces are ignored.
 */
export function shortestWordLength(
  /** The input string. */
  str: string,
): number {
  const words = splitString(str.trim());
  if (words.length === 0) return 0;
  return words.reduce((min, w) => Math.min(min, w.length), Infinity);
}
