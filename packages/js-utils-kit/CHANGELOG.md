# Changelog

## 5.0.0

### Major Changes

- [#167](https://github.com/teneplaysofficial/js-utils-kit/pull/167) [`42bed98`](https://github.com/teneplaysofficial/js-utils-kit/commit/42bed982054ee2c84da302141b9ec08441ae996d) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Enforce stricter case validation rules via shared regex package

  ### Changes
  - `CAMEL_CASE_REGEX` now requires **at least one uppercase transition**
    - Previously valid: `"hello"`
    - Now invalid: `"hello"`
    - Still valid: `"helloWorld"`
  - `PASCAL_CASE_REGEX` now requires **at least two segments**
    - Previously valid: `"Hello"`
    - Now invalid: `"Hello"`
    - Still valid: `"HelloWorld"`
  - Migrated to `@js-utils-kit/regex` for all regex patterns
  - Enforced stricter rules for:
    - `camelCase`
    - `PascalCase`
    - `snake_case`
    - `kebab-case`

  ### Affected exports
  - `CAMEL_CASE_REGEX`
  - `PASCAL_CASE_REGEX`
  - `isCamelCase`
  - `isPascalCase`

  ### Impact
  - These changes modify validation behavior and will cause some previously valid inputs to fail.
  - Downstream consumers **must audit usages** of:
    - `isCamelCase`
    - `isPascalCase`
    - direct usage of the regex constants

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

- [#174](https://github.com/teneplaysofficial/js-utils-kit/pull/174) [`004efdb`](https://github.com/teneplaysofficial/js-utils-kit/commit/004efdb6ace7e0d33583075610b5cfc43af334fc) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Remove deprecated `mergeObj` function and replace it with [`deepMerge`](https://js-utils.js.org/functions/deepMerge.html).

### Minor Changes

- [#167](https://github.com/teneplaysofficial/js-utils-kit/pull/167) [`42bed98`](https://github.com/teneplaysofficial/js-utils-kit/commit/42bed982054ee2c84da302141b9ec08441ae996d) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Introduce regex utilities package

### Patch Changes

- [#177](https://github.com/teneplaysofficial/js-utils-kit/pull/177) [`d6af860`](https://github.com/teneplaysofficial/js-utils-kit/commit/d6af860560d9a3bc6204560f0cf7111bc8e5ca23) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Refactor `detectPM` to use `name != null` for consistent null/undefined handling in conditional spreading.

- [#174](https://github.com/teneplaysofficial/js-utils-kit/pull/174) [`004efdb`](https://github.com/teneplaysofficial/js-utils-kit/commit/004efdb6ace7e0d33583075610b5cfc43af334fc) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Simplify Email Validation Using Centralized Regex
  - Replaces manual email parsing and validation logic with a single regex-based approach using [`EMAIL_REGEX`](https://js-utils.js.org/variables/EMAIL_REGEX.html). This reduces complexity and improves maintainability by delegating validation responsibility to a centralized regex.
  - Updates Typedoc to reflect the new behavior:
    - Removes explicit local and domain length enforcement from the function
    - Clarifies that validation is fully handled by the regex
    - Adds support and documentation for custom regex overrides
  - No breaking changes, but validation behavior may differ slightly due to removal of manual checks.

- Updated dependencies [[`42bed98`](https://github.com/teneplaysofficial/js-utils-kit/commit/42bed982054ee2c84da302141b9ec08441ae996d), [`004efdb`](https://github.com/teneplaysofficial/js-utils-kit/commit/004efdb6ace7e0d33583075610b5cfc43af334fc), [`d6af860`](https://github.com/teneplaysofficial/js-utils-kit/commit/d6af860560d9a3bc6204560f0cf7111bc8e5ca23), [`004efdb`](https://github.com/teneplaysofficial/js-utils-kit/commit/004efdb6ace7e0d33583075610b5cfc43af334fc), [`004efdb`](https://github.com/teneplaysofficial/js-utils-kit/commit/004efdb6ace7e0d33583075610b5cfc43af334fc), [`42bed98`](https://github.com/teneplaysofficial/js-utils-kit/commit/42bed982054ee2c84da302141b9ec08441ae996d)]:
  - @js-utils-kit/core@5.0.0

## 4.0.0

### Major Changes

- [#155](https://github.com/teneplaysofficial/js-utils-kit/pull/155) [`ae4c3ab`](https://github.com/teneplaysofficial/js-utils-kit/commit/ae4c3ab07de129980ec4187cec071d742de09fdc) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Relocate `isBrowser` from `@js-utils-kit/env` to `juk-web`.

  **Migration**

  ```diff
  - import { isBrowser } from '@js-utils-kit/env'
  + import { isBrowser } from 'juk-web'
  ```

### Patch Changes

- [#158](https://github.com/teneplaysofficial/js-utils-kit/pull/158) [`82eab17`](https://github.com/teneplaysofficial/js-utils-kit/commit/82eab17054934b5373f243a0f98bc98fd1b50a3a) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Correct character counting for whitespace and unicode (fixes spaces, tabs, newlines, and emoji handling).

  **Before**
  - Whitespace could be inconsistently counted

  **After**
  - All characters are counted correctly:
    - spaces
    - tabs (`\t`)
    - newlines (`\n`)
    - unicode characters (emoji, symbols, etc.)

- [#157](https://github.com/teneplaysofficial/js-utils-kit/pull/157) [`d329b4e`](https://github.com/teneplaysofficial/js-utils-kit/commit/d329b4e1f0f37b5877e7e66beca65c2c4d528f96) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Improve safety and validation in `resolveModuleRelative`
  - Enforces stricter rules for relative paths
  - Allow a single parent traversal (`../file`)
  - Prevents multiple parent traversals (`../../`)
  - Blocks unsafe patterns like nested traversal (`a/../file`)
  - Ensures resolved paths cannot escape the module directory
  - Improves documentation with clear path constraints

- Updated dependencies [[`82eab17`](https://github.com/teneplaysofficial/js-utils-kit/commit/82eab17054934b5373f243a0f98bc98fd1b50a3a), [`ae4c3ab`](https://github.com/teneplaysofficial/js-utils-kit/commit/ae4c3ab07de129980ec4187cec071d742de09fdc), [`d329b4e`](https://github.com/teneplaysofficial/js-utils-kit/commit/d329b4e1f0f37b5877e7e66beca65c2c4d528f96)]:
  - @js-utils-kit/core@4.0.0

## 3.0.0

### Major Changes

- Dependency sync

### Patch Changes

- Updated dependencies []:
  - @js-utils-kit/core@3.0.0

## 2.3.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies []:
  - @js-utils-kit/core@2.3.0

## 2.2.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies []:
  - @js-utils-kit/core@2.2.0

## 2.1.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies []:
  - @js-utils-kit/core@2.1.0

## 2.0.0

### Major Changes

- Dependency sync

### Patch Changes

- Updated dependencies []:
  - @js-utils-kit/core@2.0.0

## 1.3.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies []:
  - @js-utils-kit/core@1.4.0

## 1.2.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`b6af799`](https://github.com/teneplaysofficial/js-utils-kit/commit/b6af79973aa30da62987930472c9d4e76eed0a13)]:
  - @js-utils-kit/core@1.3.0

## 1.1.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies []:
  - @js-utils-kit/core@1.2.0

## 1.0.0

### Major Changes

- [`798daaf`](https://github.com/teneplaysofficial/js-utils-kit/commit/798daaf91b4cb6bbbff6cee7daaedef34f177e55) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Allow access to `@js-utils-kit/core` through a single `js-utils-kit` installation.

## [0.5.4](https://github.com/teneplaysofficial/js-utils-kit/compare/v0.5.3...v0.5.4) (2025-10-13)

### Bug Fixes

- enforce RFC compliance and prevent ReDoS ([#11](https://github.com/teneplaysofficial/js-utils-kit/issues/11)) ([6a25ee7](https://github.com/teneplaysofficial/js-utils-kit/commit/6a25ee7f66b001296b00acff2fe4af4e0f01a903))

## [0.5.3](https://github.com/teneplaysofficial/js-utils-kit/compare/v0.5.2...v0.5.3) (2025-09-22)

## [0.5.2](https://github.com/teneplaysofficial/js-utils-kit/compare/v0.5.1...v0.5.2) (2025-09-15)

### Bug Fixes

- exclude release commits ([38198c2](https://github.com/teneplaysofficial/js-utils-kit/commit/38198c2ce6f9a581e3d990001e9db0ff60b4ae9d))

## [0.5.1](https://github.com/teneplaysofficial/js-utils-kit/compare/v0.5.0...v0.5.1) (2025-09-08)

## [0.5.0](https://github.com/teneplaysofficial/js-utils-kit/compare/v0.4.0...v0.5.0) (2025-09-01)

### Features

- **string:** enhance string utilities with word extraction ([#8](https://github.com/teneplaysofficial/js-utils-kit/issues/8)) ([95157ca](https://github.com/teneplaysofficial/js-utils-kit/commit/95157caf7c7fab2887f2892664e85b7056819f55))

## [0.4.0](https://github.com/teneplaysofficial/js-utils-kit/compare/v0.3.4...v0.4.0) (2025-08-25)

### Features

- **number:** add `getMilliseconds` utility with tests and CI/docs improvements ([#7](https://github.com/teneplaysofficial/js-utils-kit/issues/7)) ([2a9db03](https://github.com/teneplaysofficial/js-utils-kit/commit/2a9db03fa18e28dc77442d09298d1f7afe9e8cb7))

## [0.3.4](https://github.com/teneplaysofficial/js-utils-kit/compare/v0.3.2...v0.3.4) (2025-08-18)

## [0.3.2](https://github.com/teneplaysofficial/js-utils-kit/compare/v0.3.1...v0.3.2) (2025-08-11)

### Bug Fixes

- Correct JSR exports generation to scan `src` directory instead of `dist` ([bc39565](https://github.com/teneplaysofficial/js-utils-kit/commit/bc39565d326a77900ea5c3e64ff7c676e7f10166))

## [0.3.1](https://github.com/teneplaysofficial/js-utils-kit/compare/v0.3.0...v0.3.1) (2025-08-11)

### Bug Fixes

- Enhance JSR Publication, Optimize CI Workflow, and Improve Type Performance ([#5](https://github.com/teneplaysofficial/js-utils-kit/issues/5)) ([dc5780c](https://github.com/teneplaysofficial/js-utils-kit/commit/dc5780c7459910205df1348d7a71030f39cea3d8))

## [0.3.0](https://github.com/teneplaysofficial/js-utils-kit/compare/v0.2.3...v0.3.0) (2025-07-28)

### Features

- Add string, array, and object validation utilities ([050b053](https://github.com/teneplaysofficial/js-utils-kit/commit/050b0538bd0955722f194409e8e13e7118dfd9be))

## [0.2.3](https://github.com/TenEplaysOfficial/js-utils-kit/compare/v0.2.2...v0.2.3) (2025-07-21)

## [0.2.2](https://github.com/TenEplaysOfficial/js-utils-kit/compare/v0.2.1...v0.2.2) (2025-07-21)

## [0.2.1](https://github.com/TenEplaysOfficial/js-utils-kit/compare/v0.2.0...v0.2.1) (2025-07-21)

### Bug Fixes

- Update postbuild script to generate exports ([6780622](https://github.com/TenEplaysOfficial/js-utils-kit/commit/6780622fae2a40eacaef35c1ed865a51b9037a3d))

## [0.2.0](https://github.com/TenEplaysOfficial/js-utils-kit/compare/v0.1.0...v0.2.0) (2025-07-21)

### Features

- add ASCII character utility functions and Jest test suite ([1aa4d86](https://github.com/TenEplaysOfficial/js-utils-kit/commit/1aa4d869634100887688280358cc4d6397fc0cc8))
- Add clamp utility and tests ([f7e8f71](https://github.com/TenEplaysOfficial/js-utils-kit/commit/f7e8f71221b75ad3330e0f60553a0e3ca9486a74))
- Add deep object merge utility and tests ([627e0fb](https://github.com/TenEplaysOfficial/js-utils-kit/commit/627e0fbb76ba7b76370eff4a2287cd6cb862c07a))
- **env:** Add environment detection utilities and tests ([47fd348](https://github.com/TenEplaysOfficial/js-utils-kit/commit/47fd348f097a619998da4ce16e1f276a769b89da))
- **env:** Add getRunTimeEnvironment utility and tests ([6f2144b](https://github.com/TenEplaysOfficial/js-utils-kit/commit/6f2144babcdf3f96e94a864e57c1ba5de4d69ce8))
- **number:** Add `isEven` and `isOdd` with tests ([c27109f](https://github.com/TenEplaysOfficial/js-utils-kit/commit/c27109fc9da08fe77dd0dfc332efdffcebb9e923))
- **number:** Add `randomInt` and `randomFloat` with tests ([cf31d1e](https://github.com/TenEplaysOfficial/js-utils-kit/commit/cf31d1e551adfc3e7c83899beef087170025bf95))
- **string:** Add string validation utilities and tests ([3c506c1](https://github.com/TenEplaysOfficial/js-utils-kit/commit/3c506c15a6c4d6ed7391443a1f3499a7ed977f79))

### Bug Fixes

- **CLI:** Move runtime deps (ora, commander) to dependencies ([5731c56](https://github.com/TenEplaysOfficial/js-utils-kit/commit/5731c568480893b53abb0d22f1d97fb7b461bfe0))

## 0.1.0 (2025-06-30)

### Features

- implement createArchive and CLI support + update workflow with yarn and release-it test hook ([d6419b9](https://github.com/TenEplaysOfficial/js-utils-kit/commit/d6419b97bac4662ea8edc4af519f18e1b7279688))
