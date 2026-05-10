import type { PmCommandMap } from '../types';

export const bunCommands = {
  /** Install a package(s) */
  install: {
    /** Install package(s) */
    default: 'bun add',

    /** Install development dependency package(s) */
    dev: 'bun add -d',

    /** Install global package(s) */
    global: 'bun add -g',
  },
  /** Remove a package(s) */
  uninstall: {
    /** Remove installed package(s) */
    default: 'bun remove',

    /** Remove globally installed package(s) */
    global: 'bun remove -g',
  },
} as const satisfies PmCommandMap;
