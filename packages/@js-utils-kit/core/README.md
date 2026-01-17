# `@js-utils-kit/core`

_Modular JavaScript utilities with type support_

[![ci](https://github.com/teneplaysofficial/js-utils-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/TenEplaysOfficial/js-utils-kit)
[![codecov](https://codecov.io/github/teneplaysofficial/js-utils-kit/graph/badge.svg?token=9CEFGKSU2S)](https://github.com/TenEplaysOfficial/js-utils-kit)
[![npm version](https://img.shields.io/npm/v/@js-utils-kit/core.svg?logo=npm&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/core)
[![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/core?logo=npm)](https://www.npmjs.com/package/@js-utils-kit/core)

## Overview

**JS Utils Kit** is a compact and reliable library of essential JavaScript utility functions. It includes helpers for arrays, objects, numbers, promises, type checking, and more. Designed for performance and modularity, it integrates easily into JavaScript and TypeScript projects with minimal impact on bundle size.

This package includes utilities designed for both browser and Node.js environments, clearly organized and optimized for cross-platform compatibility.

## Installation

```sh
# via npm
npm install @js-utils-kit/core

# via yarn
yarn add @js-utils-kit/core

# via pnpm
pnpm add @js-utils-kit/core

# via bun
bun add @js-utils-kit/core
```

## Usage

```ts
import { capitalize, clamp, isBrowser, isEmpty, unique } from '@js-utils-kit/core';

console.log(clamp(150, 0, 100)); // 100
console.log(capitalize('hello world')); // 'Hello World'
console.log(unique([1, 2, 2, 3])); // [1, 2, 3]
console.log(isEmpty({})); // true
console.log(isBrowser()); // true/false
```

or

```ts
import * as kit from '@js-utils-kit/core';

console.log(kit.clamp(150, 0, 100)); // 100
console.log(kit.capitalize('hello')); // 'Hello'
console.log(kit.unique([1, 1, 2])); // [1, 2]
console.log(kit.isEmpty({})); // true
console.log(kit.isNode()); // true/false
```

## Documentation

Full documentation is available at [js-utils.js.org](https://js-utils.js.org/modules.html)

## Contributing

We welcome contributions whether it's fixing bugs, adding utilities, improving docs, or writing tests. See [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines and join our [GitHub Discussions](https://github.com/teneplaysofficial/js-utils-kit/discussions) to share ideas or propose features.

## License

Released under the [MIT License](../../LICENSE)
