import type { PackageManager } from './types';

export type PMCommand =
  | 'installGlobal'
  | 'uninstallGlobal'
  | 'add'
  | 'addProd'
  | 'addDev'
  | 'remove'
  | 'login'
  | 'logout'
  | 'run'
  | 'publish';

export const PM_COMMANDS = {
  npm: {},

  yarn: {},

  pnpm: {},

  bun: {},
} as const satisfies Record<PackageManager, Partial<Record<PMCommand, string>>>;
