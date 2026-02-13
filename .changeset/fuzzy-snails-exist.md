---
'@js-utils-kit/valid': major
'@js-utils-kit/env': minor
---

Extract runtime helpers to a dedicated `env` package and refactor them into static boolean flags.

#### Breaking Changes

The following exports have been removed from `@js-utils-kit/valid`:

- `isDev`
- `isProd`
- `isTest`
- `isNode`
- `isBrowser`

> These helpers are no longer available from this package.

#### Features

The runtime helpers have:

1. Been moved from `@js-utils-kit/valid` to `@js-utils-kit/env`.
2. Been refactored from functions to constant boolean flags.

They are no longer callable (remove `()` from usages).

#### Migration Guide

```diff
- import { isDev, isProd, isTest, isNode, isBrowser } from "@js-utils-kit/valid";
+ import { isDev, isProd, isTest, isNode, isBrowser } from "@js-utils-kit/env";

- if (isDev()) {
+ if (isDev) {
    ...
}

- if (isProd()) {
+ if (isProd) {
    ...
}

- if (isTest()) {
+ if (isTest) {
    ...
}

- if (isNode()) {
+ if (isNode) {
    ...
}

- if(isBrowser()){
+ if(isBrowser){
    ...
}
```
