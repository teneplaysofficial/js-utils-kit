import type { PmCommandMap } from '../types';

export const pnpmCommands = {
  /** Install a package(s) */
  install: {
    /** Install package(s) */
    default: 'pnpm add',

    /** Install development dependency package(s) */
    dev: 'pnpm add -D',

    /** Install global package(s) */
    global: 'pnpm add -g',
  },

  /** Remove a package(s) */
  uninstall: {
    /** Remove installed package(s) */
    default: 'pnpm remove',

    /** Remove globally installed package(s) */
    global: 'pnpm remove -g',
  },
} as const satisfies PmCommandMap;
