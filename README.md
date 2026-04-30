# js-utils-kit

> Modular, typed, and tree-shakable JavaScript utilities.

[![Publish](https://github.com/teneplaysofficial/js-utils-kit/actions/workflows/publish.yml/badge.svg)](https://github.com/teneplaysofficial/js-utils-kit/actions/workflows/publish.yml)
[![ci](https://github.com/teneplaysofficial/js-utils-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/TenEplaysOfficial/js-utils-kit)
[![codecov](https://codecov.io/github/teneplaysofficial/js-utils-kit/graph/badge.svg?token=9CEFGKSU2S)](https://app.codecov.io/gh/teneplaysofficial/js-utils-kit/tree/main)
[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/teneplaysofficial/js-utils-kit/main.svg)](https://results.pre-commit.ci/latest/github/teneplaysofficial/js-utils-kit/main)

## Overview

**JS Utils Kit** is a compact and reliable library of essential JavaScript utility functions. It includes helpers for arrays, objects, numbers, promises, type checking, and more. Designed for performance and modularity, it integrates easily into JavaScript and TypeScript projects with minimal impact on bundle size.

This package includes utilities designed for both browser and Node.js environments, clearly organized and optimized for cross-platform compatibility.

## Installation

```sh
# via npm
npm install js-utils-kit

# via yarn
yarn add js-utils-kit

# via pnpm
pnpm add js-utils-kit

# via bun
bun add js-utils-kit
```

## Usage

```ts
import { capitalize, clamp, isBrowser, isEmpty, unique } from 'js-utils-kit';

console.log(clamp(150, 0, 100)); // 100
console.log(capitalize('hello world')); // 'Hello World'
console.log(unique([1, 2, 2, 3])); // [1, 2, 3]
console.log(isEmpty({})); // true
console.log(isBrowser); // true/false
```

or

```ts
import * as kit from 'js-utils-kit';

console.log(kit.clamp(150, 0, 100)); // 100
console.log(kit.capitalize('hello')); // 'Hello'
console.log(kit.unique([1, 1, 2])); // [1, 2]
console.log(kit.isEmpty({})); // true
console.log(kit.isNode); // true/false
```

## Packages

<!-- packages:start -->

| Package                                                                            |                                                                                Version                                                                                |                                                                   Downloads                                                                    | Description                                                              |
| ---------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------ |
| [`@js-utils-kit/array`](https://www.npmjs.com/package/@js-utils-kit/array)         |     [![npm version](https://img.shields.io/npm/v/@js-utils-kit/array.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/array)     |     [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/array?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/array)     | Array utilities                                                          |
| [`@js-utils-kit/charset`](https://www.npmjs.com/package/@js-utils-kit/charset)     |   [![npm version](https://img.shields.io/npm/v/@js-utils-kit/charset.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/charset)   |   [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/charset?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/charset)   | Character Sets utilities                                                 |
| [`@js-utils-kit/constants`](https://www.npmjs.com/package/@js-utils-kit/constants) | [![npm version](https://img.shields.io/npm/v/@js-utils-kit/constants.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/constants) | [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/constants?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/constants) | Commonly used constants utilities                                        |
| [`@js-utils-kit/core`](https://www.npmjs.com/package/@js-utils-kit/core)           |      [![npm version](https://img.shields.io/npm/v/@js-utils-kit/core.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/core)      |      [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/core?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/core)      | Essential JavaScript helpers                                             |
| [`@js-utils-kit/env`](https://www.npmjs.com/package/@js-utils-kit/env)             |       [![npm version](https://img.shields.io/npm/v/@js-utils-kit/env.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/env)       |       [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/env?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/env)       | Environment utilities                                                    |
| [`@js-utils-kit/fs`](https://www.npmjs.com/package/@js-utils-kit/fs)               |        [![npm version](https://img.shields.io/npm/v/@js-utils-kit/fs.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/fs)        |        [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/fs?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/fs)        | File system utilities                                                    |
| [`@js-utils-kit/number`](https://www.npmjs.com/package/@js-utils-kit/number)       |    [![npm version](https://img.shields.io/npm/v/@js-utils-kit/number.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/number)    |    [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/number?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/number)    | Number utilities                                                         |
| [`@js-utils-kit/object`](https://www.npmjs.com/package/@js-utils-kit/object)       |    [![npm version](https://img.shields.io/npm/v/@js-utils-kit/object.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/object)    |    [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/object?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/object)    | Object utilities                                                         |
| [`@js-utils-kit/pm`](https://www.npmjs.com/package/@js-utils-kit/pm)               |        [![npm version](https://img.shields.io/npm/v/@js-utils-kit/pm.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/pm)        |        [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/pm?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/pm)        | Utilities for detecting and interacting with JavaScript package managers |
| [`@js-utils-kit/regex`](https://www.npmjs.com/package/@js-utils-kit/regex)         |     [![npm version](https://img.shields.io/npm/v/@js-utils-kit/regex.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/regex)     |     [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/regex?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/regex)     | Regular Expression utilities                                             |
| [`@js-utils-kit/string`](https://www.npmjs.com/package/@js-utils-kit/string)       |    [![npm version](https://img.shields.io/npm/v/@js-utils-kit/string.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/string)    |    [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/string?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/string)    | String utilities                                                         |
| [`@js-utils-kit/system`](https://www.npmjs.com/package/@js-utils-kit/system)       |    [![npm version](https://img.shields.io/npm/v/@js-utils-kit/system.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/system)    |    [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/system?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/system)    | System utilities                                                         |
| [`@js-utils-kit/types`](https://www.npmjs.com/package/@js-utils-kit/types)         |     [![npm version](https://img.shields.io/npm/v/@js-utils-kit/types.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/types)     |     [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/types?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/types)     | Type Declarations                                                        |
| [`@js-utils-kit/valid`](https://www.npmjs.com/package/@js-utils-kit/valid)         |     [![npm version](https://img.shields.io/npm/v/@js-utils-kit/valid.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/@js-utils-kit/valid)     |     [![Downloads](https://img.shields.io/npm/dt/@js-utils-kit/valid?label=&style=flat)](https://www.npmjs.com/package/@js-utils-kit/valid)     | Validation utilities                                                     |
| [`js-utils-kit`](https://www.npmjs.com/package/js-utils-kit)                       |            [![npm version](https://img.shields.io/npm/v/js-utils-kit.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/js-utils-kit)            |            [![Downloads](https://img.shields.io/npm/dt/js-utils-kit?label=&style=flat)](https://www.npmjs.com/package/js-utils-kit)            | Essential JavaScript helpers                                             |
| [`juk-cli`](https://www.npmjs.com/package/juk-cli)                                 |                 [![npm version](https://img.shields.io/npm/v/juk-cli.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/juk-cli)                 |                 [![Downloads](https://img.shields.io/npm/dt/juk-cli?label=&style=flat)](https://www.npmjs.com/package/juk-cli)                 | command line interface utilities                                         |
| [`juk-web`](https://www.npmjs.com/package/juk-web)                                 |                 [![npm version](https://img.shields.io/npm/v/juk-web.svg?label=&style=flat&color=brightgreen)](https://www.npmjs.com/package/juk-web)                 |                 [![Downloads](https://img.shields.io/npm/dt/juk-web?label=&style=flat)](https://www.npmjs.com/package/juk-web)                 | Web utilities for JavaScript                                             |

<!-- packages:end -->

## Documentation

Full documentation is available at [js-utils.js.org](https://js-utils.js.org/modules.html)

## Contributing

We welcome contributions whether it's fixing bugs, adding utilities, improving docs, or writing tests. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines and join our [GitHub Discussions](https://github.com/teneplaysofficial/js-utils-kit/discussions) to share ideas or propose features.

## License

Released under the [MIT License](LICENSE)
