# Contributing to JS Utils Kit

Thank you for your interest in contributing to **JS Utils Kit** 🎉. This project is a **pnpm monorepo powered by Turbo**, and we welcome improvements across utilities, tooling, documentation, and performance.

## Monorepo Structure

This project uses:

- **pnpm workspaces**
- **Turbo** for task orchestration
- **tsdown** for building packages
- **TypeDoc** for documentation
- **ESLint** for linting

### Root Structure Overview

```txt
js-utils-kit/
├── packages/              # All publishable/internal packages
├── scripts/               # Build & development tooling
├── eslint.config.ts       # ESLint configuration
├── tsconfig.base.json     # Base TypeScript config
├── turbo.json             # Turbo pipeline config
├── typedoc.json           # Documentation config
├── pnpm-workspace.yaml    # Workspace definition
└── package.json           # Root package config
```

Each utility/package inside `packages/` is independently buildable and testable.

## Requirements

Before contributing, ensure you have:

- **Node.js** (LTS recommended)
- **pnpm**
- **Git**
- Basic understanding of **TypeScript**
- Familiarity with monorepos (preferred)

Install pnpm if needed:

```sh
npm install -g pnpm
```

## Getting Started

### 1. Fork the Repository

Fork the repo on GitHub.

### 2. Clone Your Fork

```sh
git clone https://github.com/your-username/js-utils-kit.git
cd js-utils-kit
```

### 3. Install Dependencies

```sh
pnpm install
```

Since this is a monorepo, this installs dependencies for **all workspace packages**.

## Running Tests

Run all tests across packages:

```sh
pnpm test
```

Turbo will automatically run tests in affected packages.

To run tests in a specific package:

```sh
pnpm --filter <package-name> test
```

## Building the Project

This project uses **tsdown** for building and **Turbo** to orchestrate builds.

Build all packages:

```sh
pnpm build
```

Build a specific package:

```sh
pnpm --filter <package-name> build
```

Outputs typically include:

- ESM build
- CJS build
- Type declaration files

## Generating Documentation

Documentation is generated using TypeDoc.

```sh
pnpm docs
```

Typedoc configuration is defined in:

```txt
typedoc.json
```

## Development Workflow

### 1. Create a Branch

```sh
git checkout -b feat/your-feature-name
```

### 2. Make Your Changes

Work inside the appropriate package under:

```txt
packages/
```

### 3. Test & Build Before PR

```sh
pnpm test
pnpm build
```

Ensure:

- No TypeScript errors
- All tests pass
- Linting passes
- No breaking exports

### 4. Open Pull Request

Push your branch and open a PR against `main`.

## Changesets (Versioning & Releases)

This project uses **Changesets** to manage versioning and releases across the monorepo.

### When to Create a Changeset

You must create a changeset when:

- You modify a public API
- You add a new feature
- You fix a bug that affects users
- You introduce breaking changes

Not required for:

- Internal refactors (no behavior change)
- Documentation-only changes (usually)
- CI or tooling changes (unless user-facing)

### How to Add a Changeset

After making your changes:

```sh
pnpm changeset
```

You will be prompted to:

1. Select affected packages
2. Choose version bump type:
   - `patch` → bug fix
   - `minor` → new feature
   - `major` → breaking change

3. Write a short summary

This creates a markdown file inside:

```txt
.changeset/
```

Commit that file along with your changes.

## Commit Message Guidelines

We follow **Conventional Commits**:

- `feat:` → New feature
- `fix:` → Bug fix
- `docs:` → Documentation change
- `refactor:` → Code refactoring
- `test:` → Test changes
- `chore:` → Build/tooling/internal updates

Example:

```sh
git commit -m "feat(utils): add clamp utility"
```

## Adding a New Package

If you are contributing a new package:

1. Create a new directory inside `packages/`
2. Add its `package.json`
3. Ensure it is included in `pnpm-workspace.yaml`
4. Add build script using `tsdown`
5. Add tests
6. Export properly
7. Update documentation if necessary

## Code Quality

This project enforces:

- ESLint (see `eslint.config.ts`)
- TypeScript strict mode
- Clean public exports
- Dual ESM + CJS compatibility

Run linting:

```sh
pnpm lint
```

## Security & Conduct

Please review:

- `CODE_OF_CONDUCT.md`
- `SECURITY.md`

Report security issues responsibly.

## Pull Request Checklist

Before submitting a PR, ensure:

- [ ] The change has a clear purpose
- [ ] Related tests are added or updated
- [ ] All tests pass (`pnpm test`)
- [ ] The project builds successfully (`pnpm build`)
- [ ] No unintended breaking changes
- [ ] The utility is compatible with both ESM and CJS
- [ ] Public exports are correct
- [ ] Documentation updated (if needed)

## Questions?

If you’re unsure about something:

- Open an Issue
- Start a Discussion
- Ask for architectural clarification before large changes
