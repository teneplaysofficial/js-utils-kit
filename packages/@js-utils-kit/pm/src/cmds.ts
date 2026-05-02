import type { PackageManager } from './types';

type Action = 'install';

export type PmCommands = Action | `un${Action}`;

export const PM_COMMANDS = {
  /**
   * Node Package Manager.
   *
   * {@link https://www.npmjs.com/}
   */
  npm: {},

  /**
   * pnpm: Save time. Save disk space. Supercharge your monorepos.
   *
   * {@link https://pnpm.io/}
   */
  pnpm: {},

  /**
   * Safe, stable, reproducible projects.
   *
   * Yarn is a package manager that doubles down as project manager. Whether you work on simple projects or industry monorepos, whether you're an open source developer or an enterprise user, Yarn has your back.
   *
   * {@link https://yarnpkg.com/}
   */
  yarn: {},

  /**
   * Bun — A fast all-in-one JavaScript runtime
   *
   * {@link https://bun.com/}
   */
  bun: {},
} as const satisfies Record<PackageManager, Partial<Record<PmCommands, string>>>;
