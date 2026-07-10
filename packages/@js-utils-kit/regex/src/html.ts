/**
 * Matches any HTML/XML-like tag, including React fragments.
 *
 * Intended for stripping markup from a string, not for validating HTML.
 *
 * @example
 * ```ts
 * "<p>Hello</p>".replace(HTML_TAG_REGEX, "");
 * // "Hello"
 * ```
 *
 * @example
 * ```ts
 * "<><div>Hello</div></>".replace(HTML_TAG_REGEX, "");
 * // "Hello"
 * ```
 */
export const HTML_TAG_REGEX = /<\/?[^>]*>/g;

/**
 * Matches standard HTML tags whose tag names begin with a letter.
 *
 * Unlike {@link HTML_TAG_REGEX}, this pattern does not match React fragment tags (`<>` and `</>`).
 *
 * @example
 * ```ts
 * "<div>Hello</div>".replace(STRICT_HTML_TAG_REGEX, "");
 * // "Hello"
 * ```
 *
 * @example
 * ```ts
 * "<></>".match(STRICT_HTML_TAG_REGEX);
 * // null
 * ```
 */
export const STRICT_HTML_TAG_REGEX = /<\/?[a-z][^>]*>/gi;
