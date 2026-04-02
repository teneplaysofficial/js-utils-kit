# @js-utils-kit/core

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
  - @js-utils-kit/string@1.6.1
  - @js-utils-kit/env@3.0.0
  - @js-utils-kit/fs@1.7.1
  - @js-utils-kit/pm@0.3.1

## 3.0.0

### Major Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`e00b16e`](https://github.com/teneplaysofficial/js-utils-kit/commit/e00b16ef6a1ec31996d7af256a2a09e12965f868), [`e00b16e`](https://github.com/teneplaysofficial/js-utils-kit/commit/e00b16ef6a1ec31996d7af256a2a09e12965f868), [`e00b16e`](https://github.com/teneplaysofficial/js-utils-kit/commit/e00b16ef6a1ec31996d7af256a2a09e12965f868), [`c7851c9`](https://github.com/teneplaysofficial/js-utils-kit/commit/c7851c9e507422a8ef7638f03993792a9a1b1ba8)]:
  - @js-utils-kit/fs@1.7.0
  - @js-utils-kit/system@1.0.1
  - @js-utils-kit/types@1.6.0
  - @js-utils-kit/env@2.0.0
  - @js-utils-kit/array@0.7.0
  - @js-utils-kit/constants@0.5.0
  - @js-utils-kit/number@1.6.0
  - @js-utils-kit/object@1.3.0
  - @js-utils-kit/pm@0.3.0
  - @js-utils-kit/string@1.6.0

## 2.3.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`7eed96f`](https://github.com/teneplaysofficial/js-utils-kit/commit/7eed96f166448f75cd05546cfde0786ae2ba4c41), [`6b2217a`](https://github.com/teneplaysofficial/js-utils-kit/commit/6b2217a0ae15681825e5c0082e14230b13baafdb)]:
  - @js-utils-kit/array@0.6.0
  - @js-utils-kit/object@1.2.1

## 2.2.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`b1c9516`](https://github.com/teneplaysofficial/js-utils-kit/commit/b1c9516ff156680c5ba517342251d4ca103fccc6), [`c757aa9`](https://github.com/teneplaysofficial/js-utils-kit/commit/c757aa9dee5c478088b2342a645df196c566128d), [`c757aa9`](https://github.com/teneplaysofficial/js-utils-kit/commit/c757aa9dee5c478088b2342a645df196c566128d)]:
  - @js-utils-kit/env@1.7.0
  - @js-utils-kit/types@1.5.0
  - @js-utils-kit/object@1.2.0
  - @js-utils-kit/array@0.5.0
  - @js-utils-kit/constants@0.4.0
  - @js-utils-kit/fs@1.6.0
  - @js-utils-kit/number@1.5.0
  - @js-utils-kit/pm@0.2.0
  - @js-utils-kit/string@1.5.0

## 2.1.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`919cf6e`](https://github.com/teneplaysofficial/js-utils-kit/commit/919cf6e8e6f9761c77a2ce12b187a009bc8f0631), [`919cf6e`](https://github.com/teneplaysofficial/js-utils-kit/commit/919cf6e8e6f9761c77a2ce12b187a009bc8f0631), [`9e71b82`](https://github.com/teneplaysofficial/js-utils-kit/commit/9e71b828ab5e0a8cc638b8fb5b7d936d5ba0a0b9), [`919cf6e`](https://github.com/teneplaysofficial/js-utils-kit/commit/919cf6e8e6f9761c77a2ce12b187a009bc8f0631)]:
  - @js-utils-kit/pm@0.1.0
  - @js-utils-kit/types@1.4.0
  - @js-utils-kit/constants@0.3.0
  - @js-utils-kit/fs@1.5.0
  - @js-utils-kit/array@0.4.0
  - @js-utils-kit/env@1.6.0
  - @js-utils-kit/number@1.4.0
  - @js-utils-kit/string@1.4.0

## 2.0.0

### Major Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`e3799d3`](https://github.com/teneplaysofficial/js-utils-kit/commit/e3799d368bddd172ba074786534ee1d907c404ef), [`c124905`](https://github.com/teneplaysofficial/js-utils-kit/commit/c124905b24181197cd5039279f019a83fc03ae0e), [`75531aa`](https://github.com/teneplaysofficial/js-utils-kit/commit/75531aadaa2d25e1208a1afad284ea8ae8a7ba79), [`f1e4b53`](https://github.com/teneplaysofficial/js-utils-kit/commit/f1e4b53e4955cc4bf35b64ee742442f7d0e0b799)]:
  - @js-utils-kit/valid@2.0.0
  - @js-utils-kit/env@1.5.0
  - @js-utils-kit/fs@1.4.0
  - @js-utils-kit/constants@0.2.1

## 1.4.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`e1e4794`](https://github.com/teneplaysofficial/js-utils-kit/commit/e1e4794f83b825ff6ce6fe0cb34bdad8bf9aef6c), [`480c790`](https://github.com/teneplaysofficial/js-utils-kit/commit/480c79079c93f5a4b273ca9844eb165df861643f)]:
  - @js-utils-kit/constants@0.2.0
  - @js-utils-kit/object@1.1.0
  - @js-utils-kit/types@1.3.0
  - @js-utils-kit/env@1.4.0
  - @js-utils-kit/array@0.3.0
  - @js-utils-kit/fs@1.3.0
  - @js-utils-kit/number@1.3.0
  - @js-utils-kit/string@1.3.0
  - @js-utils-kit/valid@1.3.0

## 1.3.0

### Minor Changes

- Dependency sync

### Patch Changes

- [`b6af799`](https://github.com/teneplaysofficial/js-utils-kit/commit/b6af79973aa30da62987930472c9d4e76eed0a13) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Fixed relative links in the README

- Updated dependencies [[`25a7c22`](https://github.com/teneplaysofficial/js-utils-kit/commit/25a7c224f6078da2847990a6e57e463c09a65a3e), [`25a7c22`](https://github.com/teneplaysofficial/js-utils-kit/commit/25a7c224f6078da2847990a6e57e463c09a65a3e)]:
  - @js-utils-kit/types@1.2.0
  - @js-utils-kit/constants@0.1.0
  - @js-utils-kit/array@0.2.0
  - @js-utils-kit/env@1.3.0
  - @js-utils-kit/fs@1.2.0
  - @js-utils-kit/number@1.2.0
  - @js-utils-kit/string@1.2.0
  - @js-utils-kit/valid@1.2.0

## 1.2.0

### Minor Changes

- Dependency sync

### Patch Changes

- Updated dependencies [[`b0534bb`](https://github.com/teneplaysofficial/js-utils-kit/commit/b0534bb9494679de4e5c3916c0824b91d9bab237), [`24d542d`](https://github.com/teneplaysofficial/js-utils-kit/commit/24d542d2924182f269049647120a550006e9e679), [`b0534bb`](https://github.com/teneplaysofficial/js-utils-kit/commit/b0534bb9494679de4e5c3916c0824b91d9bab237), [`b0534bb`](https://github.com/teneplaysofficial/js-utils-kit/commit/b0534bb9494679de4e5c3916c0824b91d9bab237), [`b0534bb`](https://github.com/teneplaysofficial/js-utils-kit/commit/b0534bb9494679de4e5c3916c0824b91d9bab237), [`b0534bb`](https://github.com/teneplaysofficial/js-utils-kit/commit/b0534bb9494679de4e5c3916c0824b91d9bab237)]:
  - @js-utils-kit/types@1.1.0
  - @js-utils-kit/valid@1.1.0
  - @js-utils-kit/array@0.1.0
  - @js-utils-kit/env@1.2.0
  - @js-utils-kit/fs@1.1.0
  - @js-utils-kit/number@1.1.0
  - @js-utils-kit/string@1.1.0

## 1.1.1

### Patch Changes

- Updated dependencies [0771e56]
  - @js-utils-kit/env@1.1.0

## 1.1.0

### Minor Changes

- 7b0ec06: Add system utils lib

### Patch Changes

- 511c35a: Added missing `homepage` fields to package metadata
- Updated dependencies [7b0ec06]
- Updated dependencies [511c35a]
  - @js-utils-kit/system@1.0.0
  - @js-utils-kit/string@1.0.1
  - @js-utils-kit/valid@1.0.1

## 1.0.0

### Major Changes

- dc78cf2: Initial release

### Patch Changes

- Updated dependencies [dc78cf2]
  - @js-utils-kit/charset@1.0.0
  - @js-utils-kit/number@1.0.0
  - @js-utils-kit/object@1.0.0
  - @js-utils-kit/string@1.0.0
  - @js-utils-kit/types@1.0.0
  - @js-utils-kit/valid@1.0.0
  - @js-utils-kit/env@1.0.0
  - @js-utils-kit/fs@1.0.0
