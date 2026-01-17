import { cpus } from 'node:os';

/**
 * CPU architecture
 *
 * {@link NodeJS.Architecture}
 */
export const ARCHITECTURE: NodeJS.Architecture = process.arch;

/**
 * Get number of CPU cores available.
 */
export const CPUCores: number = cpus().length;

/**
 * Get CPU model
 */
export const CPUModel: string = cpus()[0].model;
