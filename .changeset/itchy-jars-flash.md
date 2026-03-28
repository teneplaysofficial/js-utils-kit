---
'@js-utils-kit/types': minor
---

Add `JsonReplacer` type, supporting `function/array/null` forms, improving type safety & DX, and avoiding TS overload inference issues with `JSON.stringify` while using `Parameters<typeof JSON.stringify>[1]`
