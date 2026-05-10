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

/** Supported package manager command variants */
export type PmCommandVariant = 'default' | 'dev' | 'global';

/** Mapping of command variants to their CLI command strings */
export type PmCommandVariants = Partial<Record<PmCommandVariant, string>>;

type Action = 'install';

/** Supported package manager commands */
export type PmCommands = Action | `un${Action}`;

/**
 * Mapping of package manager actions to their CLI command strings.
 */
export type PmCommandMap = Partial<Record<PmCommands, PmCommandVariants>>;

/**
 * Registry of all supported package manager command maps.
 *
 * Each package manager is mapped to its own {@link PmCommandMap}.
 */
export type PmCommandsRegistry = Record<PackageManager, PmCommandMap>;
