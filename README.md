<div align="center">

[![img](https://capsule-render.vercel.app/api?type=waving&height=300&color=gradient&text=Js%20Utils%20Kit&section=footer&desc=Modular%20JavaScript%20utilities%20with%20type%20support%20for%20strings,%20objects,%20arrays,%20and%20more&descAlign=49&descAlignY=72&animation=fadeIn&textBg=false)](https://github.com/TenEplaysOfficial/js-utils-kit)

[![Build](https://github.com/teneplaysofficial/js-utils-kit/actions/workflows/publish.yml/badge.svg)](https://github.com/TenEplaysOfficial/js-utils-kit)
[![npm version](https://img.shields.io/npm/v/js-utils-kit.svg?style=for-the-badge)](https://www.npmjs.com/package/js-utils-kit)
[![JSR](https://jsr.io/badges/@tene/js-utils-kit)](https://jsr.io/@tene/js-utils-kit)
[![JSR Score](https://jsr.io/badges/@tene/js-utils-kit/score)](https://jsr.io/@tene/js-utils-kit)
[![License](https://img.shields.io/github/license/TenEplaysOfficial/js-utils-kit.svg?style=for-the-badge)](https://github.com/TenEplaysOfficial/js-utils-kit/blob/main/LICENSE)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/js-utils-kit?style=for-the-badge)](https://bundlephobia.com/package/js-utils-kit)
[![GitHub stars](https://img.shields.io/github/stars/TenEplaysOfficial/js-utils-kit?style=for-the-badge)](https://github.com/TenEplaysOfficial/js-utils-kit/stargazers)
[![Issues](https://img.shields.io/github/issues/TenEplaysOfficial/js-utils-kit?style=for-the-badge)](https://github.com/TenEplaysOfficial/js-utils-kit/issues)
[![PRs](https://img.shields.io/github/issues-pr/TenEplaysOfficial/js-utils-kit?style=for-the-badge)](https://github.com/TenEplaysOfficial/js-utils-kit/pulls)
[![Last Commit](https://img.shields.io/github/last-commit/TenEplaysOfficial/js-utils-kit?style=for-the-badge)](https://github.com/TenEplaysOfficial/js-utils-kit/commits)
[![Discussions](https://img.shields.io/github/discussions/TenEplaysOfficial/js-utils-kit?style=for-the-badge)](https://github.com/TenEplaysOfficial/js-utils-kit/discussions)
[![Downloads](https://img.shields.io/npm/dm/js-utils-kit?style=for-the-badge)](https://www.npmjs.com/package/js-utils-kit)
[![GitHub repo size](https://img.shields.io/github/repo-size/TenEplaysOfficial/js-utils-kit?style=for-the-badge)](https://github.com/TenEplaysOfficial/js-utils-kit)
[![Type Support](https://img.shields.io/badge/type-support-blue?style=for-the-badge)](https://github.com/TenEplaysOfficial/js-utils-kit)
[![Sponsor](https://img.shields.io/badge/funding-sponsor-yellow?style=for-the-badge)](https://github.com/sponsors/TenEplaysOfficial)
[![Follow @teneplays on X](https://img.shields.io/badge/follow-@teneplays-fff?logo=x&style=for-the-badge)](https://x.com/teneplays)

</div>

**JS Utils Kit** is a compact and reliable library of essential JavaScript utility functions. It includes helpers for arrays, objects, numbers, promises, type checking, and more. Designed for performance and modularity, it integrates easily into JavaScript and TypeScript projects with minimal impact on bundle size.

> Streamline your code with battle-tested, tree-shakable utilities.

This package includes utilities designed for both browser and Node.js environments, clearly organized and optimized for cross-platform compatibility.

## Installation

```sh
yarn add js-utils-kit
# or
npm install js-utils-kit
```

## Usage

`js-utils-kit` offers a modular structure for utilities across different categories like `number`, `string`, `array`, `object`, `env`, and more. You can use full or scoped imports depending on your preference and project setup.

### Recommended Import

Import only what you need by utility category:

```ts
import number from 'js-utils-kit/number';
import string from 'js-utils-kit/string';
import array from 'js-utils-kit/array';
import object from 'js-utils-kit/object';
import env from 'js-utils-kit/env';

console.log(number.clamp(150, 0, 100)); // 100
console.log(string.capitalize('hello world')); // 'Hello World'
console.log(array.unique([1, 2, 2, 3])); // [1, 2, 3]
console.log(object.isEmpty({})); // true
console.log(env.isBrowser()); // true/false
```

### Full Import (All utils in one namespace)

```ts
import * as kit from 'js-utils-kit';

console.log(kit.number.clamp(150, 0, 100)); // 100
console.log(kit.string.capitalize('hello')); // 'Hello'
console.log(kit.array.unique([1, 1, 2])); // [1, 2]
console.log(kit.object.isEmpty({})); // true
console.log(kit.env.isNode()); // true/false
```

### Named Imports

```ts
import { number, string, env } from 'js-utils-kit';

console.log(number.clamp(42, 0, 100)); // 42
console.log(string.capitalize('js-utils-kit')); // 'Js-utils-kit'
console.log(env.isDev()); // true/false
```

### CommonJS Usage

```js
const { number, string, array, object, env } = require('js-utils-kit');

console.log(number.clamp(150, 0, 100)); // 100
console.log(string.capitalize('hello world')); // 'Hello World'
console.log(array.unique([1, 2, 2, 3])); // [1, 2, 3]
console.log(object.isEmpty({})); // true
console.log(env.isBrowser()); // true/false
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

- Node.js: Version `18.0.0` or higher
- Yarn (or npm as an alternative)
- TypeScript (optional, for TypeScript projects or development)
- Browsers: Modern browsers for browser-based usage

## Contributing

We welcome contributions whether it's fixing bugs, adding utilities, improving docs, or writing tests. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines and join our [GitHub Discussions](https://github.com/TenEplaysOfficial/js-utils-kit/discussions) to share ideas or propose features.

## FAQ

<details>
<summary>Does it work in browsers?</summary>

Yes, **JS Utils Kit** is compatible with modern browsers and Node.js.

</details>

<details>
<summary>Do I need TypeScript?</summary>

No, the library works in plain JavaScript, but TypeScript users benefit from full type definitions and editor support.

</details>

<details>
<summary>How do I report a bug?</summary>

Open an issue on [GitHub](https://github.com/TenEplaysOfficial/js-utils-kit/issues) or join the [Discussions](https://github.com/TenEplaysOfficial/js-utils-kit/discussions) to ask questions or share feedback.

</details>

<details>
<summary>How can I optimize bundle size?</summary>

Import only what you need:

```ts
import { clamp } from 'js-utils-kit/number';
```

This enables tree-shaking for smaller, optimized bundles.

</details>

## License

Released under the [MIT License](LICENSE)
