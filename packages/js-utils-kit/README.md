# js-utils-kit

> _Modular JavaScript utilities with type support_

[![npm version](https://img.shields.io/npm/v/js-utils-kit.svg?logo=npm&color=brightgreen)](https://www.npmjs.com/package/js-utils-kit)
[![Downloads](https://img.shields.io/npm/dt/js-utils-kit?logo=npm)](https://www.npmjs.com/package/js-utils-kit)

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
console.log(isBrowser()); // true/false
```

or

```ts
import * as kit from 'js-utils-kit';

console.log(kit.clamp(150, 0, 100)); // 100
console.log(kit.capitalize('hello')); // 'Hello'
console.log(kit.unique([1, 1, 2])); // [1, 2]
console.log(kit.isEmpty({})); // true
console.log(kit.isNode()); // true/false
```

## Documentation

Full documentation is available at [js-utils.js.org](https://js-utils.js.org/modules.html)
