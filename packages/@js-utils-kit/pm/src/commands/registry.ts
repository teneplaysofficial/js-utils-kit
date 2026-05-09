import type { PmCommandsRegistry } from '../types';
import { bunCommands } from './bun';
import { npmCommands } from './npm';
import { pnpmCommands } from './pnpm';
import { yarnCommands } from './yarn';

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
  npm: npmCommands,

  /**
   * pnpm: Save time. Save disk space. Supercharge your monorepos.
   *
   * {@link https://pnpm.io/}
   */
  pnpm: pnpmCommands,

  /**
   * Safe, stable, reproducible projects.
   *
   * Yarn is a package manager that doubles down as project manager. Whether you work on simple projects or industry monorepos, whether you're an open source developer or an enterprise user, Yarn has your back.
   *
   * {@link https://yarnpkg.com/}
   */
  yarn: yarnCommands,

  /**
   * Bun — A fast all-in-one JavaScript runtime
   *
   * {@link https://bun.com/}
   */
  bun: bunCommands,
} as const satisfies PmCommandsRegistry;
