import type { PmCommandMap } from '../types';

export const yarnCommands = {
  /** Install a package(s) */
  install: {
    /** Install package(s) */
    default: 'yarn add',

    /** Install development dependency package(s) */
    dev: 'yarn add -D',

    /**
     * Install global package(s).
     *
     * @remarks
     * This command is only supported in Yarn Classic (v1).
     *
     * Yarn Berry (v2+) removed support for global commands.
     * Using `npm install -g` is recommended for global installation.
     */
    global: 'yarn global add',
  },

  /** Remove a package(s) */
  uninstall: {
    /** Remove installed package(s) */
    default: 'yarn remove',

    /**
     * Remove globally installed package(s).
     *
     * @remarks
     * This command is only supported in Yarn Classic (v1).
     *
     * Yarn Berry (v2+) removed support for global commands.
     * Using `npm install -g` is recommended for global installation.
     */
    global: 'yarn global remove',
  },
} as const satisfies PmCommandMap;
