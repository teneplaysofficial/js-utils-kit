# @js-utils-kit/env

## 2.0.0

### Major Changes

- [#150](https://github.com/teneplaysofficial/js-utils-kit/pull/150) [`c7851c9`](https://github.com/teneplaysofficial/js-utils-kit/commit/c7851c9e507422a8ef7638f03993792a9a1b1ba8) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Removed the default export for `isCI`. It is now available only as a named export.

  ```diff
  - import isCI from '@js-utils-kit/env';
  + import { isCI } from '@js-utils-kit/env';
  ```

- Dependency sync

### Patch Changes

- Updated dependencies [[`e00b16e`](https://github.com/teneplaysofficial/js-utils-kit/commit/e00b16ef6a1ec31996d7af256a2a09e12965f868), [`e00b16e`](https://github.com/teneplaysofficial/js-utils-kit/commit/e00b16ef6a1ec31996d7af256a2a09e12965f868)]:
  - @js-utils-kit/system@1.0.1
  - @js-utils-kit/types@1.6.0

## 1.7.0

### Minor Changes

- [#126](https://github.com/teneplaysofficial/js-utils-kit/pull/126) [`b1c9516`](https://github.com/teneplaysofficial/js-utils-kit/commit/b1c9516ff156680c5ba517342251d4ca103fccc6) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Add environment variable utilities including helpers for reading, writing, toggling, and modifying environment variables, along with cross-platform shell references via `envRef`.

- Dependency sync

### Patch Changes

- Updated dependencies [[`c757aa9`](https://github.com/teneplaysofficial/js-utils-kit/commit/c757aa9dee5c478088b2342a645df196c566128d)]:
  - @js-utils-kit/types@1.5.0

## 1.6.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`919cf6e`](https://github.com/teneplaysofficial/js-utils-kit/commit/919cf6e8e6f9761c77a2ce12b187a009bc8f0631)]:
  - @js-utils-kit/types@1.4.0

## 1.5.0

### Minor Changes

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

## 1.4.0

### Minor Changes

- Dependency sync

### Patch Changes

- [#91](https://github.com/teneplaysofficial/js-utils-kit/pull/91) [`480c790`](https://github.com/teneplaysofficial/js-utils-kit/commit/480c79079c93f5a4b273ca9844eb165df861643f) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Fix false-positive CI detection when running via `npx` or other local tooling.

  Generic CI flags like `CI` and `CONTINUOUS_INTEGRATION` are now only treated as signals when backed by a real CI provider environment variable. This prevents local development environments from being incorrectly detected as CI while preserving correct behavior in real CI systems.

- Updated dependencies [[`e1e4794`](https://github.com/teneplaysofficial/js-utils-kit/commit/e1e4794f83b825ff6ce6fe0cb34bdad8bf9aef6c)]:
  - @js-utils-kit/types@1.3.0

## 1.3.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`25a7c22`](https://github.com/teneplaysofficial/js-utils-kit/commit/25a7c224f6078da2847990a6e57e463c09a65a3e)]:
  - @js-utils-kit/types@1.2.0

## 1.2.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`b0534bb`](https://github.com/teneplaysofficial/js-utils-kit/commit/b0534bb9494679de4e5c3916c0824b91d9bab237)]:
  - @js-utils-kit/types@1.1.0

## 1.1.0

### Minor Changes

- 0771e56: Add `isCI` utility for detecting CI environments across multiple providers with safe, false-positive-free checks.

## 1.0.0

### Major Changes

- dc78cf2: Initial release

### Patch Changes

- Updated dependencies [dc78cf2]
  - @js-utils-kit/types@1.0.0
