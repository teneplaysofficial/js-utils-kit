import type { PmCommandMap } from '../types';

export const yarnCommands = {
  /** Install a package(s) */
  install: {
    /** Install package(s) */
    default: 'yarn add',

    /** Install development dependency package(s) */
    dev: 'yarn add -D',

    /** Install global package(s) */
    global: 'yarn global add',
  },

  /** Remove a package(s) */
  uninstall: {
    /** Remove installed package(s) */
    default: 'yarn remove',

    /** Remove globally installed package(s) */
    global: 'yarn global remove',
  },
} as const satisfies PmCommandMap;
