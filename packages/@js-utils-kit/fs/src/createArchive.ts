import fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import type { Archiver } from 'archiver';
import { CreateArchiveOptions } from '@js-utils-kit/types';

/**
 * Creates a {@link ArchiveFormat } archive from a specified directory.
 *
 * This function uses the `archiver` library to package a directory into an archive file.
 * It supports optional compression for `zip` and returns a Promise that resolves
 * when the archive is successfully created.
 *
 * @example
 *
 * Function usage:
 *
 * ```ts
 * await createArchive({
 *   format: "zip",
 *   source: "dist/",
 *   destination: "dist.zip",
 * });
 * ```
 *
 * @returns A Promise that resolves when the archive is created
 *
 * @throws If an error occurs during the archiving process
 */
export function createArchive({
  format,
  source,
  destination,
  options = {},
  log = true,
  onSuccess,
}: CreateArchiveOptions): Promise<void> {
  const resolvedSource = path.resolve(source);

  if (!fs.existsSync(resolvedSource) || !fs.statSync(resolvedSource).isDirectory()) {
    throw new Error(`Source directory "${source}" does not exist or is not a directory.`);
  }

  const output = fs.createWriteStream(destination);

  if (format === 'zip') {
    options = {
      ...options,
      /**
       * Maximum compression level for zip is 9.
       */
      zlib: { level: 9 },
    };
  }

  const archive: Archiver = archiver(format, options);

  return new Promise((resolve, reject) => {
    output.on('close', () => {
      const size = archive.pointer();

      if (log) {
        console.log(`${destination} created: ${size} total bytes`);
      }
      if (onSuccess) {
        onSuccess(size);
      }

      resolve();
    });

    archive.on('error', (err: Error) => {
      reject(err);
    });

    archive.pipe(output);
    archive.directory(source, false);
    archive.finalize().catch((err) => reject(err instanceof Error ? err : new Error(String(err))));
  });
}
