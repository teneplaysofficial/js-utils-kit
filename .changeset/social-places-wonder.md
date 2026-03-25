---
'@js-utils-kit/env': major
---

Removed the default export for `isCI`. It is now available only as a named export.

```diff
- import isCI from '@js-utils-kit/env';
+ import { isCI } from '@js-utils-kit/env';
```
