import { freemem, totalmem } from 'node:os';

/** Total system memory */
export const totalMemory: number = totalmem();

/** Free system memory */
export const freeMemory: number = freemem();

/** Memory usage of the current Node.js process */
export const PROCESS_MEMORY_USAGE: NodeJS.MemoryUsage = process.memoryUsage();
