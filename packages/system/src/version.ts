/**
 * The full Node.js version string.
 *
 * Extracted directly from `process.versions.node`.
 *
 * @returns The current Node.js version string.
 *
 * @example
 * ```ts
 * console.log(NODE_VERSION); // "25.0.0"
 * ```
 */
export const NODE_VERSION: string = process.versions.node;

/**
 * The major Node.js version number.
 *
 * Useful for runtime checks, feature gating, or conditional behavior.
 *
 * @returns The major version as a number.
 *
 * @example
 * ```ts
 * console.log(NODE_MAJOR_VERSION); // 25
 * ```
 */
export const NODE_MAJOR_VERSION: number = Number(NODE_VERSION.split('.')[0]);

/**
 * A complete map of all Node.js runtime component versions.
 *
 * @returns A {@link NodeJS.ProcessVersions} object representing all runtime versions.
 *
 * @example
 * RUNTIME_VERSIONS.v8; // "12.4.254.13-node.123"
 */
export const RUNTIME_VERSIONS: NodeJS.ProcessVersions = process.versions;
