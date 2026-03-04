import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { exists } from '@js-utils-kit/fs';
import { PackageJson } from '@js-utils-kit/types';
import { DetectPMOptions, DetectPMResult, PackageManager } from './types';

/** List of JavaScript package managers */
export const PACKAGE_MANAGERS = ['npm', 'pnpm', 'yarn', 'bun'] as const;

/**
 * Detect the package manager used in a project directory.
 *
 * @remarks
 *
 * Detection strategy:
 *
 * 1. `npm_config_user_agent` environment variable
 * 2. Lockfiles (`package-lock.json`, `pnpm-lock.yaml`, etc.)
 * 3. `package.json` → `packageManager` field
 *
 * Each later step can override earlier detection.
 *
 *
 * @example
 * ```ts
 * const pm = await detectPM();
 *
 * console.log(pm.name);
 * // "pnpm"
 *
 * if (pm.isPnpm) {
 *   console.log('Using pnpm');
 * }
 * ```
 *
 * @example Disable lockfile detection
 *
 * ```ts
 * await detectPM({ lockfile: false });
 * ```
 *
 * @example Disable packageJson detection
 *
 * ```ts
 * await detectPM({ packageJson: false });
 * ```
 */
export async function detectPM({
  cwd = process.cwd(),
  lockfile = true,
  packageJson = true,
}: DetectPMOptions = {}): Promise<DetectPMResult> {
  let name: PackageManager | undefined;
  const ua = process.env.npm_config_user_agent;

  if (ua?.startsWith('pnpm')) name = 'pnpm';
  else if (ua?.startsWith('yarn')) name = 'yarn';
  else if (ua?.startsWith('bun')) name = 'bun';
  else if (ua?.startsWith('npm')) name = 'npm';

  if (lockfile) {
    const [isNpm, isPnpm, isYarn, isBun, isBunb] = await Promise.all([
      exists(resolve(cwd, 'package-lock.json')),
      exists(resolve(cwd, 'pnpm-lock.yaml')),
      exists(resolve(cwd, 'yarn.lock')),
      exists(resolve(cwd, 'bun.lock')),
      exists(resolve(cwd, 'bun.lockb')),
    ]);

    if (isNpm) name = 'npm';
    else if (isYarn) name = 'yarn';
    else if (isPnpm) name = 'pnpm';
    else if (isBun || isBunb) name = 'bun';
  }

  if (packageJson)
    try {
      const pkg = JSON.parse(await readFile(resolve(cwd, 'package.json'), 'utf-8')) as PackageJson;

      if (pkg.packageManager) {
        const pm = pkg.packageManager.split('@')[0] as PackageManager;
        if (PACKAGE_MANAGERS.includes(pm)) {
          name = pm;
        }
      }
    } catch {
      //
    }

  return {
    name,
    isPackageManager: name != null,
    isNpm: name === 'npm',
    isPnpm: name === 'pnpm',
    isYarn: name === 'yarn',
    isBun: name === 'bun',
  };
}
