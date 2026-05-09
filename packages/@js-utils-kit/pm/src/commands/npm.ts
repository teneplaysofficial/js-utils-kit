import type { PmCommandMap } from '../types';

export const npmCommands = {
  /** Install a package(s) */
  install: {
    /** Install package(s) */
    default: 'npm install',

    /** Install development dependency package(s) */
    dev: 'npm install -D',

    /** Install global package(s) */
    global: 'npm install -g',
  },

  /** Remove a package(s) */
  uninstall: {
    /** Remove installed package(s) */
    default: 'npm uninstall',

    /** Remove globally installed package(s) */
    global: 'npm uninstall -g',
  },
} as const satisfies PmCommandMap;
