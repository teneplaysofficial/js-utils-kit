# `@js-utils-kit/cli`

A simple and lightweight command-line interface for the **js-utils-kit** ecosystem, providing useful utilities for environment checks and scripting workflows.

The CLI is designed to work well in local development, CI pipelines, and automation scripts.

## Installation

### Run without installing

```bash
npx -p @js-utils-kit/cli js-utils-kit --help
```

### Install globally

```bash
pnpm add -g @js-utils-kit/cli
```

## Usage

```bash
js-utils-kit [options]
```

Alias:

```bash
utils [options]
```

## API

### `--help`

Show the help message.

### `--version`

Show the CLI version.

### `--is-ci`

Detect whether the current process is running in a Continuous Integration (CI) environment.

The `--is-ci` flag is designed for scripting and automation.

- Exits with **`0`** if running in a CI environment
- Exits with **`1`** otherwise
- Produces **no output** (safe for shell usage)

Example:

```bash
js-utils-kit --is-ci && echo "Running in CI"
```
