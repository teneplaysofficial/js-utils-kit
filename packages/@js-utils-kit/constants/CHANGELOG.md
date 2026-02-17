# @js-utils-kit/constants

## 0.2.1

### Patch Changes

- [#100](https://github.com/teneplaysofficial/js-utils-kit/pull/100) [`f1e4b53`](https://github.com/teneplaysofficial/js-utils-kit/commit/f1e4b53e4955cc4bf35b64ee742442f7d0e0b799) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Update commit type titles to be changelog-friendly.

  Commit type titles now use plural, release-oriented headings such as
  **Features**, **Bug Fixes**, and **Chores**, making generated changelogs
  clearer and more consistent.

  This is a display-only change and does not affect commit parsing,
  types, or release logic.

  ```diff
  - ## Feature
  + ## Features

  - ## Bug Fix
  + ## Bug Fixes

  - ## Chore
  + ## Chores
  ```

- Dependency sync

## 0.2.0

### Minor Changes

- [#94](https://github.com/teneplaysofficial/js-utils-kit/pull/94) [`e1e4794`](https://github.com/teneplaysofficial/js-utils-kit/commit/e1e4794f83b825ff6ce6fe0cb34bdad8bf9aef6c) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Added commit metadata, scope definitions, and deep freeze utility

  #### constants
  - Added `COMMIT_SCOPES` with a standardized list of supported commit scopes
  - Added `COMMIT_SCOPE_VALUES` and `CommitScope` union type helpers
  - Added `COMMIT_TYPES` with rich Conventional Commit metadata
  - Added `COMMIT_TYPE_VALUES` and `CommitType` union type

  #### types
  - Added `CommitTypeMeta` interface for strongly-typed commit metadata
  - Improved HTTP status typing with an explicit `HttpStatusCode` union

  #### object
  - Added `deepFreeze` utility to recursively freeze objects
  - Supports circular references, shared references, symbol keys, and non-enumerable properties
  - Provides immutable guarantees with strong TypeScript typing

- Dependency sync

### Patch Changes

- Updated dependencies [[`e1e4794`](https://github.com/teneplaysofficial/js-utils-kit/commit/e1e4794f83b825ff6ce6fe0cb34bdad8bf9aef6c)]:
  - @js-utils-kit/types@1.3.0

## 0.1.0

### Minor Changes

- Dependency sync

- [#87](https://github.com/teneplaysofficial/js-utils-kit/pull/87) [`25a7c22`](https://github.com/teneplaysofficial/js-utils-kit/commit/25a7c224f6078da2847990a6e57e463c09a65a3e) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Add constants for charset, HTTP, math, numbers, physics, symbols, time, and units
