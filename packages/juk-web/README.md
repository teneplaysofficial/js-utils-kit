# juk-web

> Browser APIs for JS Utils Kit.

[![npm version](https://img.shields.io/npm/v/juk-web.svg?logo=npm&color=brightgreen)](https://www.npmjs.com/package/juk-web)
[![Downloads](https://img.shields.io/npm/dt/juk-web?logo=npm)](https://www.npmjs.com/package/juk-web)

> [!NOTE]
> This package is intended for browser environments. For cross-platform utilities, use js-utils-kit.

## Installation

```bash
pnpm add juk-web
```

## Usage

### Package Managers

```js
import { isBrowser } from "juk-web";

console.log(isBrowser);
```

### Browser (ESM)

```html
<script type="module">
  import { isBrowser } from "https://esm.sh/juk-web@0";

  console.log(isBrowser);
</script>
```

### Browser (Global)

```html
<script src="https://cdn.jsdelivr.net/npm/juk-web@0/dist/index.iife.js"></script>

<script>
  console.log(jukWeb.isBrowser);
</script>
```
