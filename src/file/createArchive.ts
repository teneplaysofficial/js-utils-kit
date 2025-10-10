import fs from 'fs';
import path from 'path';
import archiver, { Archiver, ArchiverOptions } from 'archiver';
export type { ArchiverOptions } from 'archiver';

/**
 * Supported archive formats.
 */
export type ArchiveFormat = 'zip' | 'tar';

/**
 * Configuration options.
 */
export interface CreateArchiveOptions {
  /**
   * Archive format to use {@link ArchiveFormat}.
   */
  format: ArchiveFormat;

  /**
   * Path to the source directory that should be archived.
   */
  source: string;

  /**
   * Destination file path where the archive will be written
   * @example
   *  - For `zip` format: `dist.zip`
   *  - For `tar` format: `dist.tar`
   */
  destination: string;

  /**
   * Additional options passed directly to the archiver library. See {@link ArchiverOptions}.
   */
  options?: ArchiverOptions;

  /**
   * Optional flag to enable internal logging. Useful for CLI mode.
   */
  log?: boolean;

  /**
   * Called after archiving is complete — receives total size in bytes.
   */
  onSuccess?: (bytes: number) => void;
}

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
 *  CLI usage:
 * ```sh
 * npx js-utils-kit createArchive -f zip -s dist -d dist.zip
 * ```
 *
 * @param options - Archive creation options
 * @returns A Promise that resolves when the archive is created
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
