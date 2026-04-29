---
'@js-utils-kit/fs': major
'@js-utils-kit/env': minor
'@js-utils-kit/core': major
js-utils-kit: major
---

Improve and Relocate CommonJS Detection

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
