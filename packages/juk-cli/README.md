# juk-cli

> CLI for the JS Utils Kit ecosystem.

[![npm version](https://img.shields.io/npm/v/juk-cli.svg?logo=npm&color=brightgreen)](https://www.npmjs.com/package/juk-cli)
[![Downloads](https://img.shields.io/npm/dt/juk-cli?logo=npm)](https://www.npmjs.com/package/juk-cli)

## Overview

juk-cli provides command-line utilities for the JS Utils Kit ecosystem. It is designed for local development, automation scripts, and CI environments.

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
