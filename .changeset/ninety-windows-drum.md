---
'@js-utils-kit/env': patch
---

Fix false-positive CI detection when running via `npx` or other local tooling.

Generic CI flags like `CI` and `CONTINUOUS_INTEGRATION` are now only treated as signals when backed by a real CI provider environment variable. This prevents local development environments from being incorrectly detected as CI while preserving correct behavior in real CI systems.
