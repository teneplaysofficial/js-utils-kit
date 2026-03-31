---
'@js-utils-kit/env': major
---

Relocate `isBrowser` from `@js-utils-kit/env` to `juk-web`.

**Migration**

```diff
- import { isBrowser } from '@js-utils-kit/env'
+ import { isBrowser } from 'juk-web'
```
