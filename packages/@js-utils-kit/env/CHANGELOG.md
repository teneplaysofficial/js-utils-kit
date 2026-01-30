# @js-utils-kit/env

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
