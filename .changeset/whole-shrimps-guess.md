---
'@js-utils-kit/fs': patch
'@js-utils-kit/core': patch
js-utils-kit: patch
---

Improve safety and validation in `resolveModuleRelative`

- Enforces stricter rules for relative paths
- Allow a single parent traversal (`../file`)
- Prevents multiple parent traversals (`../../`)
- Blocks unsafe patterns like nested traversal (`a/../file`)
- Ensures resolved paths cannot escape the module directory
- Improves documentation with clear path constraints
