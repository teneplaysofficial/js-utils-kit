---
'@js-utils-kit/object': minor
---

Add `deepMerge` utility for recursively merging objects with configurable array strategies (`replace`, `concat`, `merge`).

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
