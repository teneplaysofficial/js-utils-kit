import type { PACKAGE_MANAGERS } from './pm';

export type PackageManager = (typeof PACKAGE_MANAGERS)[number];

/**
 * Options for {@link detectPM}
 */
export interface DetectPMOptions {
  /**
   * Working directory where package manager detection should occur.
   *
   * @default `process.cwd()`.
   */
  cwd?: string;

  /**
   * Whether to detect the package manager using lockfiles.
   *
   * Supported lockfiles:
   * - `package-lock.json` → npm
   * - `pnpm-lock.yaml` → pnpm
   * - `yarn.lock` → yarn
   * - `bun.lock` or `bun.lockb` → bun
   *
   * @default true
   */
  lockfile?: boolean;

  /**
   * Whether to inspect `package.json` for the `packageManager` field.
   *
   * Example:
   * ```json
   * {
   *   "packageManager": "pnpm@10.30.3"
   * }
   * ```
   *
   * @default true
   */
  packageJson?: boolean;
}

/**
 * Result returned by {@link detectPM}
 */
export interface DetectPMResult {
  /**
   * Detected package manager name.
   *
   * `undefined` if no package manager could be determined.
   */
  name?: PackageManager;

  /**
   * Indicates whether any package manager was detected.
   */
  isPackageManager: boolean;

  /** True if npm is detected */
  isNpm: boolean;

  /** True if pnpm is detected */
  isPnpm: boolean;

  /** True if yarn is detected */
  isYarn: boolean;

  /** True if bun is detected */
  isBun: boolean;
}
