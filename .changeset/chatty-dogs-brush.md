---
'@js-utils-kit/valid': major
'@js-utils-kit/core': major
js-utils-kit: major
---

Enforce stricter case validation rules via shared regex package

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
