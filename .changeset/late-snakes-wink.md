---
'@js-utils-kit/valid': patch
'@js-utils-kit/core': patch
js-utils-kit: patch
---

Simplify Email Validation Using Centralized Regex

- Replaces manual email parsing and validation logic with a single regex-based approach using [`EMAIL_REGEX`](https://js-utils.js.org/variables/EMAIL_REGEX.html). This reduces complexity and improves maintainability by delegating validation responsibility to a centralized regex.
- Updates Typedoc to reflect the new behavior:
  - Removes explicit local and domain length enforcement from the function
  - Clarifies that validation is fully handled by the regex
  - Adds support and documentation for custom regex overrides
- No breaking changes, but validation behavior may differ slightly due to removal of manual checks.
