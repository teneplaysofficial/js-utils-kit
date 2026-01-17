import { homedir } from 'node:os';

/** Get user home directory */
export const homeDir: string = homedir();

/** Get current working directory */
export const cwd: string = process.cwd();

/** Get absolute path of the Node.js executable */
export const nodePath: string = process.execPath;

/** Get all CLI arguments */
export const argv: string[] = process.argv;

/**
 * The current process environment variables.
 *
 * {@link NodeJS.ProcessEnv}
 */
export const env: NodeJS.ProcessEnv = process.env;
