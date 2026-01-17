import { ArchiverOptions } from 'archiver';
import { ArchiveFormat } from './ArchiveFormat';

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
