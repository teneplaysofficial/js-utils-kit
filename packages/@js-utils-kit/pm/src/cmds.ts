import { isArray } from '@js-utils-kit/valid';
import type { PackageManager } from './types';

type Action = 'install';

/** Supported package manager commands */
export type PmCommands = Action | `un${Action}`;

/**
 * Mapping of package managers to their respective command strings.
 *
 * Each package manager defines how common operations (like install/uninstall) are translated into CLI commands.
 *
 * This abstraction allows building commands dynamically without hardcoding package manager-specific syntax throughout the codebase.
 *
 * @example
 * ```ts
 * PM_COMMANDS.npm.install
 * // "npm install"
 *
 * PM_COMMANDS.pnpm.uninstall
 * // "pnpm remove"
 * ```
 */
export const PM_COMMANDS = {
  /**
   * Node Package Manager.
   *
   * {@link https://www.npmjs.com/}
   */
  npm: {
    /** Install a package(s) */
    install: 'npm install',
    /** Remove a package(s) */
    uninstall: 'npm uninstall',
  },

  /**
   * pnpm: Save time. Save disk space. Supercharge your monorepos.
   *
   * {@link https://pnpm.io/}
   */
  pnpm: {
    /** Install a package(s) */
    install: 'pnpm add',
    /** Remove a package(s) */
    uninstall: 'pnpm remove',
  },

  /**
   * Safe, stable, reproducible projects.
   *
   * Yarn is a package manager that doubles down as project manager. Whether you work on simple projects or industry monorepos, whether you're an open source developer or an enterprise user, Yarn has your back.
   *
   * {@link https://yarnpkg.com/}
   */
  yarn: {
    /** Install a package(s) */
    install: 'yarn add',
    /** Remove a package(s) */
    uninstall: 'yarn remove',
  },

  /**
   * Bun — A fast all-in-one JavaScript runtime
   *
   * {@link https://bun.com/}
   */
  bun: {
    /** Install a package(s) */
    install: 'bun add',
    /** Remove a package(s) */
    uninstall: 'bun remove',
  },
} as const satisfies Record<PackageManager, Partial<Record<PmCommands, string>>>;

/**
 * Builds a package manager command string.
 *
 * @returns The full command string, or undefined if not supported.
 *
 * @example
 * ```ts
 * buildPmCommand("npm", "install", "lodash");
 * // "npm install lodash"
 *
 * buildPmCommand("pnpm", "install", ["react", "react-dom"]);
 * // "pnpm add react react-dom"
 * ```
 */
export function buildPmCommand(
  /**
   * The package manager
   *
   * @see {@link PackageManager} - Available PackageManager
   */
  pm: PackageManager,
  /**
   * The command type
   *
   * @see {@link PmCommands}
   */
  command: PmCommands,
  /** Package names or arguments */
  args?: string | string[],
): string | undefined {
  const base = PM_COMMANDS[pm][command];
  if (!base) return;

  return args ? `${base} ${isArray(args) ? args.join(' ') : args}` : base;
}
