export const options = [
  { flags: '-h, --help', desc: 'Show this help message' },
  { flags: '-v, --version', desc: 'Show CLI version' },
  {
    flags: '--is-ci',
    desc: 'Detects whether the command is running in a Continuous Integration (CI) environment and exits accordingly',
  },
] as const;

export const examples = ['', '-h', '-v', '--is-ci'];

export const knownFlags = options.flatMap((o) => o.flags.split(',').map((f) => f.trim()));
