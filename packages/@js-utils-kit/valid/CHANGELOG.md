# @js-utils-kit/valid

## 2.0.0

### Major Changes

- [#105](https://github.com/teneplaysofficial/js-utils-kit/pull/105) [`e3799d3`](https://github.com/teneplaysofficial/js-utils-kit/commit/e3799d368bddd172ba074786534ee1d907c404ef) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Extract runtime helpers to a dedicated `env` package and refactor them into static boolean flags.

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

  - if(isDev()) {
  + if(isDev) {
      ...
  }

  - if(isProd()) {
  + if(isProd) {
      ...
  }

  - if(isTest()) {
  + if(isTest) {
      ...
  }

  - if(isNode()) {
  + if(isNode) {
      ...
  }

  - if(isBrowser()) {
  + if(isBrowser) {
      ...
  }
  ```

- Dependency sync

## 1.3.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`e1e4794`](https://github.com/teneplaysofficial/js-utils-kit/commit/e1e4794f83b825ff6ce6fe0cb34bdad8bf9aef6c)]:
  - @js-utils-kit/types@1.3.0

## 1.2.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`25a7c22`](https://github.com/teneplaysofficial/js-utils-kit/commit/25a7c224f6078da2847990a6e57e463c09a65a3e)]:
  - @js-utils-kit/types@1.2.0

## 1.1.0

### Minor Changes

- [#76](https://github.com/teneplaysofficial/js-utils-kit/pull/76) [`24d542d`](https://github.com/teneplaysofficial/js-utils-kit/commit/24d542d2924182f269049647120a550006e9e679) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Add `isTruthy`, `isFalsy`, and `isEmpty` utility functions.

  ### Added
  - `isTruthy` – Checks whether a value is truthy, with explicit handling for `NaN`.
  - `isFalsy` – Checks whether a value is falsy, including `NaN`.
  - `isEmpty` – Checks for empty values across common data types (strings, arrays, objects, Maps, and Sets).

- Dependency sync

### Patch Changes

- Updated dependencies [[`b0534bb`](https://github.com/teneplaysofficial/js-utils-kit/commit/b0534bb9494679de4e5c3916c0824b91d9bab237)]:
  - @js-utils-kit/types@1.1.0

## 1.0.1

### Patch Changes

- 511c35a: Added missing `homepage` fields to package metadata

## 1.0.0

### Major Changes

- dc78cf2: Initial release

### Patch Changes

- Updated dependencies [dc78cf2]
  - @js-utils-kit/types@1.0.0
