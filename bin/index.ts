import fs from 'fs';
import { Command } from 'commander';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const program = new Command();

program
  .name(pkg.displayName)
  .description(pkg.description)
  .version(pkg.version)
  .enablePositionalOptions();

program.parse();
