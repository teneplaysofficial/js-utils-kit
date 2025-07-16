# JS Utils Kit

[![npm version](https://img.shields.io/npm/v/js-utils-kit.svg)](https://www.npmjs.com/package/js-utils-kit)
[![License](https://img.shields.io/github/license/TenEplaysOfficial/js-utils-kit.svg)](LICENSE)

**JS Utils Kit** is a compact and reliable library of essential JavaScript utility functions. It includes helpers for arrays, objects, numbers, promises, type checking, and more. Designed for performance and modularity, it integrates easily into JavaScript and TypeScript projects with minimal impact on bundle size.

> Lightweight. Dependable. Modular.

## Installation

```sh
yarn add js-utils-kit
# or
npm install js-utils-kit
```

## Usage

```ts
import * as kit from 'js-utils-kit';

// Number utilities
kit.number.clamp(10, 0, 100);

// Root-level utilities
kit.isNode();
```

## Features

- Organized by category (e.g., `number`, `string`, `file`, etc.)
- Fully typed with TypeScript
- Thoroughly tested with Jest
- Tree-shakable and supports both ESM and CJS
- CLI-ready tools for file and system operations

## Documentation

Full documentation available at [GitHub Pages](https://teneplaysofficial.github.io/js-utils-kit/)

## Requirements

- Node.js
- Yarn
- TypeScript (for development)

## Contributing

Contributions are welcome. Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[MIT](LICENSE)
