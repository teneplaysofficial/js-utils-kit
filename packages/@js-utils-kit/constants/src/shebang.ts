export const SHEBANG = {
  // shell
  SH: '#!/bin/sh',
  BASH: '#!/bin/bash',
  ENV_BASH: '#!/usr/bin/env bash',
  DASH: '#!/bin/dash',
  ASH: '#!/bin/ash',
  KSH: '#!/bin/ksh',
  ZSH: '#!/usr/bin/env zsh',
  FISH: '#!/usr/bin/env fish',

  // node
  NODE: '#!/usr/bin/env node',
  NODE_DIRECT: '#!/usr/bin/node',
  NODE_NO_WARNINGS: '#!/usr/bin/env -S node --no-warnings',
  NODE_INSPECT: '#!/usr/bin/env -S node --inspect',
  NODE_LOADER_TS_NODE: '#!/usr/bin/env -S node --loader ts-node/esm',
  NODE_EXPERIMENTAL_MODULES: '#!/usr/bin/env -S node --experimental-modules',

  // js/ts
  JITI: '#!/usr/bin/env jiti',
  TS_NODE: '#!/usr/bin/env ts-node',
  TS_NODE_ESM: '#!/usr/bin/env ts-node-esm',
  TSX: '#!/usr/bin/env tsx',

  // deno
  DENO: '#!/usr/bin/env deno',
  DENO_RUN: '#!/usr/bin/env -S deno run',
  DENO_ALLOW_ALL: '#!/usr/bin/env -S deno run --allow-all',
  DENO_ALLOW_ENV: '#!/usr/bin/env -S deno run --allow-env',
  DENO_ALLOW_NET: '#!/usr/bin/env -S deno run --allow-net',
  DENO_ALLOW_READ: '#!/usr/bin/env -S deno run --allow-read',
  DENO_ALLOW_WRITE: '#!/usr/bin/env -S deno run --allow-write',
  DENO_ALLOW_FS: '#!/usr/bin/env -S deno run --allow-read --allow-write',
  DENO_EXT_JS: '#!/usr/bin/env -S deno run --ext=js',

  // bun
  BUN: '#!/usr/bin/env bun',
  BUN_RUN: '#!/usr/bin/env -S bun run',

  // python
  PYTHON: '#!/usr/bin/python',
  ENV_PYTHON: '#!/usr/bin/env python',
  PYTHON3: '#!/usr/bin/python3',
  ENV_PYTHON3: '#!/usr/bin/env python3',
  PYPY: '#!/usr/bin/env pypy',
  PYPY3: '#!/usr/bin/env pypy3',

  // ruby
  RUBY: '#!/usr/bin/ruby',
  ENV_RUBY: '#!/usr/bin/env ruby',

  // perl
  PERL: '#!/usr/bin/perl',
  ENV_PERL: '#!/usr/bin/env perl',

  // php
  PHP: '#!/usr/bin/php',
  ENV_PHP: '#!/usr/bin/env php',

  // lua
  LUA: '#!/usr/bin/lua',
  ENV_LUA: '#!/usr/bin/env lua',

  // tcl
  TCLSH: '#!/usr/bin/tclsh',
  ENV_TCLSH: '#!/usr/bin/env tclsh',

  // r
  RSCRIPT: '#!/usr/bin/env Rscript',

  // julia
  JULIA: '#!/usr/bin/env julia',

  // rust
  CARGO_SCRIPT: '#!/usr/bin/env -S cargo script',
  RUST_SCRIPT: '#!/usr/bin/env -S rust-script',

  // java
  JAVA: '#!/usr/bin/env java',

  // swift
  SWIFT: '#!/usr/bin/env swift',

  // powershell
  POWERSHELL: '#!/usr/bin/pwsh',
  ENV_POWERSHELL: '#!/usr/bin/env pwsh',

  // utilities
  ENV: '#!/usr/bin/env',
  ENV_SPLIT: '#!/usr/bin/env -S',
  TRUE: '#!/bin/true',
  FALSE: '#!/bin/false',
} as const;
