import { isArray } from '@js-utils-kit/valid';
import { PM_COMMANDS } from '../commands';
import { PACKAGE_MANAGERS } from '../pm';
import type { PackageManager, PmCommands, PmCommandVariant, PmCommandVariants } from '../types';

/**
 * Builds a package manager command string.
 *
 * @remarks
 * Automatically resolves the correct command syntax for the provided package manager and command variant.
 *
 * Useful for generating commands dynamically across different package managers ({@link PackageManager}).
 *
 * @returns The full command string, or undefined if not supported.
 *
 * @example Install a single package
 * ```ts
 * buildPmCommand(
 *   'npm',
 *   'install',
 *   'typescript',
 * );
 * // "npm install typescript"
 * ```
 *
 * @example Install multiple packages
 * ```ts
 * buildPmCommand(
 *   'pnpm',
 *   'install',
 *   ['react', 'react-dom'],
 * );
 * // "pnpm add react react-dom"
 * ```
 *
 * @example Install a development dependency
 * ```ts
 * buildPmCommand(
 *   'npm',
 *   'install',
 *   'vitest',
 *   'dev',
 * );
 * // "npm install -D vitest"
 * ```
 *
 * @example Accessing command variants directly:
 * ```ts
 * PM_COMMANDS.npm.install.default;
 * // "npm install"
 *
 * PM_COMMANDS.npm.install.dev;
 * // "npm install -D"
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
  /**
   * The command variant.
   *
   * @default "default"
   */
  variant: PmCommandVariant = 'default',
): string | undefined {
  if (!PACKAGE_MANAGERS.includes(pm)) return;

  /**
   * Removed because all commands currently use variant objects.
   * Restore this logic if string command support is added.
   */
  // const base =
  //   typeof PM_COMMANDS[pm][command] === 'string'
  //     ? variant === 'default'
  //       ? PM_COMMANDS[pm][command]
  //       : undefined
  //     : (PM_COMMANDS[pm][command] as PmCommandVariants)?.[variant];

  const base = (PM_COMMANDS[pm][command] as PmCommandVariants)?.[variant];

  if (!base) return;

  const joinedArgs = isArray(args) ? args.join(' ') : args;

  return joinedArgs ? `${base} ${joinedArgs}` : base;
}
