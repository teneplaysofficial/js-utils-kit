/**
 * Get current operating system platform
 *
 * {@link NodeJS.Platform}
 */
export const PLATFORM: NodeJS.Platform = process.platform;

/**
 * Checks whether the current system is running macOS.
 */
export const isMac: boolean = PLATFORM === 'darwin';

/**
 * Checks whether the current system is running Linux.
 */
export const isLinux: boolean = PLATFORM === 'linux';

/**
 * Checks whether the current system is running Windows.
 */
export const isWindows: boolean = PLATFORM === 'win32';

/**
 * Checks whether the current system is running Android.
 */
export const isAndroid: boolean = PLATFORM === 'android';
