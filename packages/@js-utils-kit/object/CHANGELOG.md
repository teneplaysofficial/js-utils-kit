# @js-utils-kit/object

## 1.3.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`e00b16e`](https://github.com/teneplaysofficial/js-utils-kit/commit/e00b16ef6a1ec31996d7af256a2a09e12965f868)]:
  - @js-utils-kit/types@1.6.0

## 1.2.1

### Patch Changes

- [#135](https://github.com/teneplaysofficial/js-utils-kit/pull/135) [`6b2217a`](https://github.com/teneplaysofficial/js-utils-kit/commit/6b2217a0ae15681825e5c0082e14230b13baafdb) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Allow `null` and `undefined` values in `deepMerge` parameters. These values are now safely ignored during merging.

- Dependency sync

## 1.2.0

### Minor Changes

- [#129](https://github.com/teneplaysofficial/js-utils-kit/pull/129) [`c757aa9`](https://github.com/teneplaysofficial/js-utils-kit/commit/c757aa9dee5c478088b2342a645df196c566128d) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Add `deepMerge` utility for recursively merging objects with configurable array strategies (`replace`, `concat`, `merge`).

  Deprecate `mergeObj` in favor of `deepMerge`.

  #### Migration

  ```diff
  - import { mergeObj } from "@js-utils-kit/object";
  + import { deepMerge } from "@js-utils-kit/object";

  - const result = mergeObj(
  -   false,
  -   { a: 1 },
  -   { b: 2 }
  - );
  + const result = deepMerge(
  +   { a: 1 },
  +   { b: 2 }
  + );

  - mergeObj(
  -   true,
  -   { items: [1, 2] },
  -   { items: [3] }
  - );
  + deepMerge(
  +   { items: [1, 2] },
  +   { items: [3] },
  +   { arrayStrategy: "concat" }
  + );
  ```

  ```diff
  - mergeObj(true, ...)
  + deepMerge(..., { arrayStrategy: "concat" })

  - mergeObj(false, ...)
  + deepMerge(...)
  ```

- Dependency sync

### Patch Changes

- Updated dependencies [[`c757aa9`](https://github.com/teneplaysofficial/js-utils-kit/commit/c757aa9dee5c478088b2342a645df196c566128d)]:
  - @js-utils-kit/types@1.5.0

## 1.1.0

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

## 1.0.0

### Major Changes

- dc78cf2: Initial release
