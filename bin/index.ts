import ora from 'ora';
import { Command } from 'commander';
import { createArchive, CreateArchiveOptions } from '../src/file';
import pkg from '../package.json';

const program = new Command();

program
  .name(pkg.displayName)
  .description(pkg.description)
  .version(pkg.version)
  .enablePositionalOptions();

program
  .command('createArchive')
  .description('Creates a archive from a specified directory')
  .requiredOption('-f, --format <format>', 'Archive format (zip or tar)')
  .requiredOption('-s, --source <source>', 'Source directory path')
  .requiredOption('-d, --destination <destination>', 'Destination archive file')
  .action(async (options: CreateArchiveOptions) => {
    const spinner = ora('Creating archive...').start();
    try {
      await createArchive({
        format: options.format,
        source: options.source,
        destination: options.destination,
        log: false,
        onSuccess: (totalBytes) => {
          spinner.succeed(
            `Archive created successfully at ${options.destination} (${totalBytes} bytes).`,
          );
        },
      });
    } catch (err) {
      spinner.fail(
        'Failed to create archive: ' + (err instanceof Error ? err.message : 'Unknown error'),
      );
      process.exit(1);
    }
  });

program.parse();
