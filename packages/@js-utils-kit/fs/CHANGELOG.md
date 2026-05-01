# @js-utils-kit/fs

## 2.0.0

### Major Changes

- [#174](https://github.com/teneplaysofficial/js-utils-kit/pull/174) [`004efdb`](https://github.com/teneplaysofficial/js-utils-kit/commit/004efdb6ace7e0d33583075610b5cfc43af334fc) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Improve and Relocate CommonJS Detection

  The previous `hasCommonJSFilename` utility has been removed from `@js-utils-kit/fs` and replaced with a more robust `isCommonJS` helper in `@js-utils-kit/env`. Unlike the old implementation, which only checked for `__filename`, the new version uses multiple runtime signals (`module.exports`, `require`, `exports`, `__filename`, and `__dirname`) to provide a more reliable indication of a CommonJS environment. Update your imports to use `isCommonJS` from `@js-utils-kit/env`.

  ```diff
  - import { hasCommonJSFilename } from '@js-utils-kit/fs';
  + import { isCommonJS } from '@js-utils-kit/env';

  - if (hasCommonJSFilename) {
  + if (isCommonJS) {
     console.log('Running in CommonJS environment');
   } else {
     console.log('Running in ESM environment');
   }
  ```

## 1.7.1

### Patch Changes

- [#157](https://github.com/teneplaysofficial/js-utils-kit/pull/157) [`d329b4e`](https://github.com/teneplaysofficial/js-utils-kit/commit/d329b4e1f0f37b5877e7e66beca65c2c4d528f96) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Improve safety and validation in `resolveModuleRelative`
  - Enforces stricter rules for relative paths
  - Allow a single parent traversal (`../file`)
  - Prevents multiple parent traversals (`../../`)
  - Blocks unsafe patterns like nested traversal (`a/../file`)
  - Ensures resolved paths cannot escape the module directory
  - Improves documentation with clear path constraints

## 1.7.0

### Minor Changes

- [#152](https://github.com/teneplaysofficial/js-utils-kit/pull/152) [`e00b16e`](https://github.com/teneplaysofficial/js-utils-kit/commit/e00b16ef6a1ec31996d7af256a2a09e12965f868) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Add file system utility helpers
  - Add `isFile` to check if a path is a file
  - Add `isDirectory` to check if a path is a directory
  - Add `getContentSize` to get file size with safe fallback

  Add JSON utility helpers for parsing, stringifying, and file operations.
  - Add `parseJson` for typed JSON parsing
  - Add `stringifyJson` with support for `replacer` and `space`
  - Add `readJsonFile` to read and parse JSON files
  - Add `writeJsonFile` to serialize and write JSON files

- Dependency sync

### Patch Changes

- Updated dependencies [[`e00b16e`](https://github.com/teneplaysofficial/js-utils-kit/commit/e00b16ef6a1ec31996d7af256a2a09e12965f868)]:
  - @js-utils-kit/types@1.6.0

## 1.6.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`c757aa9`](https://github.com/teneplaysofficial/js-utils-kit/commit/c757aa9dee5c478088b2342a645df196c566128d)]:
  - @js-utils-kit/types@1.5.0

## 1.5.0

### Minor Changes

- Dependency sync

- [#124](https://github.com/teneplaysofficial/js-utils-kit/pull/124) [`919cf6e`](https://github.com/teneplaysofficial/js-utils-kit/commit/919cf6e8e6f9761c77a2ce12b187a009bc8f0631) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Add `exists(path)` utility to check whether a file or directory exists.

### Patch Changes

- Updated dependencies [[`919cf6e`](https://github.com/teneplaysofficial/js-utils-kit/commit/919cf6e8e6f9761c77a2ce12b187a009bc8f0631)]:
  - @js-utils-kit/types@1.4.0

## 1.4.0

### Minor Changes

- [#106](https://github.com/teneplaysofficial/js-utils-kit/pull/106) [`c124905`](https://github.com/teneplaysofficial/js-utils-kit/commit/c124905b24181197cd5039279f019a83fc03ae0e) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Add cross-platform path conversion utilities:
  - toPosixPath
  - toWinPath
  - toPlatformPath

- [#110](https://github.com/teneplaysofficial/js-utils-kit/pull/110) [`75531aa`](https://github.com/teneplaysofficial/js-utils-kit/commit/75531aadaa2d25e1208a1afad284ea8ae8a7ba79) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Add cross-runtime module location utilities.

  New utils:
  - `hasCommonJSFilename`
  - `locateModuleFile`
  - `locateModuleDirectory`
  - `resolveModuleRelative`

  These utilities safely resolve module file paths and directories in both ESM and CommonJS environments.

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

- Dependency sync

### Patch Changes

- Updated dependencies [[`b0534bb`](https://github.com/teneplaysofficial/js-utils-kit/commit/b0534bb9494679de4e5c3916c0824b91d9bab237)]:
  - @js-utils-kit/types@1.1.0

## 1.0.0

### Major Changes

- dc78cf2: Initial release

### Patch Changes

- Updated dependencies [dc78cf2]
  - @js-utils-kit/types@1.0.0
