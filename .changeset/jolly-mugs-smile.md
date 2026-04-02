---
'@js-utils-kit/string': patch
'@js-utils-kit/core': patch
'js-utils-kit': patch
---

Correct character counting for whitespace and unicode (fixes spaces, tabs, newlines, and emoji handling).

**Before**

- Whitespace could be inconsistently counted

**After**

- All characters are counted correctly:
  - spaces
  - tabs (`\t`)
  - newlines (`\n`)
  - unicode characters (emoji, symbols, etc.)
