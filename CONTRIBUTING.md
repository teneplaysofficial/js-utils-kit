# Contributing to JS Utils Kit

Thank you for your interest in contributing to **JS Utils Kit**. Whether you're fixing bugs, proposing new utilities, refining documentation, or improving tests, your contributions are valuable and appreciated.

## Requirements

Before getting started, ensure you have the following installed:

- Node.js
- Yarn
- Git
- TypeScript (used during development)

## Quick Start

1. **Fork the repository** on GitHub.

2. **Clone your fork:**

   ```sh
   git clone https://github.com/your-username/js-utils-kit.git
   cd js-utils-kit
   ```

3. **Install dependencies:**

   ```sh
   yarn install
   ```

4. **Run tests:**

   ```sh
   yarn test
   ```

## Project Structure

| Directory  | Purpose                                |
| ---------- | -------------------------------------- |
| `src/`     | Source code organized by category      |
| `bin/`     | CLI entry points                       |
| `tests/`   | Unit tests using Jest                  |
| `scripts/` | Development tools (e.g. index builder) |
| `docs/`    | Generated TypeDoc documentation        |

## Scripts

| Command            | Description                                       |
| ------------------ | ------------------------------------------------- |
| `yarn test`        | Run all Jest tests                                |
| `yarn gen:indexes` | Generate export indexes for all categories        |
| `yarn build`       | Compile project to CJS, ESM, and type files       |
| `yarn docs`        | Generate TypeScript documentation via TypeDoc     |
| `prebuild`         | Automatically runs `gen:indexes` before build     |
| `postbuild`        | Automatically generates documentation after build |

## Development Workflow

1. **Create a new branch:**

   ```sh
   git checkout -b feat/your-feature-name
   ```

2. **Make changes and commit with a clear message:**

   ```sh
   git commit -m "feat: add clamp utility"
   ```

3. **Test and build before opening a PR:**

   ```sh
   yarn test
   yarn build
   ```

4. **Push and open a Pull Request on GitHub.**

## Commit Guidelines

Follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `refactor:` for code refactoring (no feature or fix)
- `test:` for adding or updating tests
- `chore:` for tooling, CI, or build changes

## Testing

All tests are located in the `tests/` directory and use [Jest](https://jestjs.io).

To run the test suite:

```sh
yarn test
```

Ensure new utilities are covered with appropriate test cases.

## CLI Usage

The CLI entry point is in `bin/index.ts`, powered by [Commander](https://github.com/tj/commander.js).

To test it locally:

```sh
node dist/cli/index.js --help
```

## Pull Request Checklist

Before opening a pull request, make sure:

- [ ] The change has a clear purpose
- [ ] Related tests are added or updated
- [ ] The utility is compatible with both ESM and CJS
- [ ] The utility is properly exported in `index.ts`
- [ ] There are no unintended breaking changes

If you have questions or need clarification, feel free to open an issue or start a discussion. Thank you for helping improve JS Utils Kit.
