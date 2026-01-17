---
title: CLI
---

# juk-cli

A simple and lightweight command-line interface for the **js-utils-kit** ecosystem, providing useful utilities for environment checks and scripting workflows.

The CLI is designed to work well in local development, CI pipelines, and automation scripts.

## Installation

### Run without installing

```bash
npx juk-cli --help
```

### Install globally

```bash
pnpm add -g juk-cli
```

## Usage

```bash
juk-cli [options]
```

Alias:

```bash
juk [options]
```

```bash
js-utils-kit [options]
```

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
juk --is-ci && echo "Running in CI"
```
