---
'@js-utils-kit/constants': patch
---

Update commit type titles to be changelog-friendly.

Commit type titles now use plural, release-oriented headings such as
**Features**, **Bug Fixes**, and **Chores**, making generated changelogs
clearer and more consistent.

This is a display-only change and does not affect commit parsing,
types, or release logic.

```diff
- ## Feature
+ ## Features

- ## Bug Fix
+ ## Bug Fixes

- ## Chore
+ ## Chores
```
