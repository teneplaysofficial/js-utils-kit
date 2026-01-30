---
'@js-utils-kit/constants': minor
'@js-utils-kit/object': minor
'@js-utils-kit/types': minor
---

Added commit metadata, scope definitions, and deep freeze utility

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
