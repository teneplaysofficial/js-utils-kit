import { CommitTypeMeta } from '@js-utils-kit/types';

/**
 * Map of supported commit types and their metadata.
 *
 * @remarks
 * Follows the Conventional Commits specification and extends it with additional metadata for:
 * - release automation
 * - changelog generation
 * - UI / CLI display
 */
export const COMMIT_TYPES = {
  feat: {
    type: 'feat',
    title: 'Features',
    icon: '✨',
    description: 'Introduce a new feature',
    allowsBreakingChange: true,
    defaultReleaseType: 'minor',
    isReleaseRelevant: true,
    deprecated: false,
  },

  fix: {
    type: 'fix',
    title: 'Bug Fixes',
    icon: '🐛',
    description: 'Fix a bug',
    allowsBreakingChange: true,
    defaultReleaseType: 'patch',
    isReleaseRelevant: true,
    deprecated: false,
  },

  docs: {
    type: 'docs',
    title: 'Documentation',
    icon: '📚',
    description: 'Documentation only changes',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  style: {
    type: 'style',
    title: 'Styling',
    icon: '🎨',
    description: 'Formatting or style changes that do not affect code behavior',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  refactor: {
    type: 'refactor',
    title: 'Refactors',
    icon: '🧹',
    description: 'Code change that neither fixes a bug nor adds a feature',
    allowsBreakingChange: true,
    defaultReleaseType: 'patch',
    isReleaseRelevant: true,
    deprecated: false,
  },

  perf: {
    type: 'perf',
    title: 'Performance Improvements',
    icon: '⚡',
    description: 'Improve performance',
    allowsBreakingChange: true,
    defaultReleaseType: 'patch',
    isReleaseRelevant: true,
    deprecated: false,
  },

  test: {
    type: 'test',
    title: 'Tests',
    icon: '🧪',
    description: 'Add or update tests',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  build: {
    type: 'build',
    title: 'Build System',
    icon: '🏗️',
    description: 'Changes affecting build system or dependencies',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  ci: {
    type: 'ci',
    title: 'Continuous Integration',
    icon: '🤖',
    description: 'CI/CD related changes',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  chore: {
    type: 'chore',
    title: 'Chores',
    icon: '🔧',
    description: 'Maintenance tasks',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  revert: {
    type: 'revert',
    title: 'Reverts',
    icon: '⏪',
    description: 'Revert a previous commit',
    allowsBreakingChange: false,
    defaultReleaseType: 'patch',
    isReleaseRelevant: true,
    deprecated: false,
  },

  deps: {
    type: 'deps',
    title: 'Dependency Updates',
    icon: '📦',
    description: 'Update, add, or remove dependencies',
    allowsBreakingChange: false,
    defaultReleaseType: 'patch',
    isReleaseRelevant: true,
    deprecated: false,
  },

  config: {
    type: 'config',
    title: 'Configuration',
    icon: '⚙️',
    description: 'Configuration changes',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  security: {
    type: 'security',
    title: 'Security Fixes',
    icon: '🔒',
    description: 'Security fixes or vulnerability mitigation',
    allowsBreakingChange: true,
    defaultReleaseType: 'patch',
    isReleaseRelevant: true,
    deprecated: false,
  },

  types: {
    type: 'types',
    title: 'Type Changes',
    icon: '📐',
    description: 'Type definitions or TypeScript-related changes',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  lint: {
    type: 'lint',
    title: 'Linting',
    icon: '🧹',
    description: 'Linting rules or fixes',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  format: {
    type: 'format',
    title: 'Formatting',
    icon: '🖌️',
    description: 'Code formatting changes (prettier, etc.)',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  release: {
    type: 'release',
    title: 'Release Process',
    icon: '🏷️',
    description: 'Release-related changes (versioning, tags, changelog)',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  meta: {
    type: 'meta',
    title: 'Repository Meta',
    icon: '🧩',
    description: 'Repository metadata (README, templates, tooling)',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  infra: {
    type: 'infra',
    title: 'Infrastructure',
    icon: '🏭',
    description: 'Infrastructure or environment-related changes',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  hotfix: {
    type: 'hotfix',
    title: 'Hotfixes',
    icon: '🚑',
    description: 'Critical production fix applied quickly',
    allowsBreakingChange: true,
    defaultReleaseType: 'patch',
    isReleaseRelevant: true,
    deprecated: false,
  },

  version: {
    type: 'version',
    title: 'Versioning',
    icon: '🔢',
    description: 'Version bumps without code changes',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  workflow: {
    type: 'workflow',
    title: 'Workflows',
    icon: '🔁',
    description: 'Workflow-related changes (GitHub Actions, hooks)',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  package: {
    type: 'package',
    title: 'Package Changes',
    icon: '📦',
    description: 'Package-level changes in a monorepo',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  workspace: {
    type: 'workspace',
    title: 'Workspace Changes',
    icon: '🧱',
    description: 'Workspace or monorepo configuration changes',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  api: {
    type: 'api',
    title: 'API Changes',
    icon: '🔌',
    description: 'API surface or contract changes',
    allowsBreakingChange: true,
    defaultReleaseType: 'major',
    isReleaseRelevant: true,
    deprecated: false,
  },

  'BREAKING CHANGE': {
    type: 'BREAKING CHANGE',
    title: 'Breaking Changes',
    icon: '💥',
    description: 'An explicit breaking change as defined by the Conventional Commits specification',
    allowsBreakingChange: true,
    defaultReleaseType: 'major',
    isReleaseRelevant: true,
    deprecated: false,
  },

  db: {
    type: 'db',
    title: 'Database Changes',
    icon: '🗄️',
    description: 'Database schema, migrations, or queries',
    allowsBreakingChange: true,
    defaultReleaseType: 'major',
    isReleaseRelevant: true,
    deprecated: false,
  },

  data: {
    type: 'data',
    title: 'Data Changes',
    icon: '📊',
    description: 'Data fixes, seeds, or transformations',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  ui: {
    type: 'ui',
    title: 'UI Changes',
    icon: '🎨',
    description: 'UI-related changes',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  ux: {
    type: 'ux',
    title: 'UX Improvements',
    icon: '🧠',
    description: 'User experience improvements',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  accessibility: {
    type: 'accessibility',
    title: 'Accessibility Improvements',
    icon: '♿',
    description: 'Accessibility improvements (a11y)',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  backend: {
    type: 'backend',
    title: 'Backend Changes',
    icon: '🖥️',
    description: 'Backend logic changes',
    allowsBreakingChange: true,
    defaultReleaseType: 'patch',
    isReleaseRelevant: true,
    deprecated: false,
  },

  frontend: {
    type: 'frontend',
    title: 'Frontend Changes',
    icon: '🌐',
    description: 'Frontend logic changes',
    allowsBreakingChange: false,
    defaultReleaseType: 'patch',
    isReleaseRelevant: true,
    deprecated: false,
  },

  logging: {
    type: 'logging',
    title: 'Logging',
    icon: '📜',
    description: 'Logging changes or improvements',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  monitoring: {
    type: 'monitoring',
    title: 'Monitoring',
    icon: '📡',
    description: 'Monitoring, metrics, or tracing',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  stability: {
    type: 'stability',
    title: 'Stability Improvements',
    icon: '🛡️',
    description: 'Stability and reliability improvements',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  optimization: {
    type: 'optimization',
    title: 'Optimizations',
    icon: '🚀',
    description: 'Code or runtime optimizations',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  dx: {
    type: 'dx',
    title: 'Developer Experience',
    icon: '🧑‍💻',
    description: 'Developer experience improvements',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  tooling: {
    type: 'tooling',
    title: 'Tooling',
    icon: '🛠️',
    description: 'Developer tools or internal utilities',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  scripts: {
    type: 'scripts',
    title: 'Scripts',
    icon: '📜',
    description: 'Automation or helper script changes',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  cleanup: {
    type: 'cleanup',
    title: 'Cleanup',
    icon: '🧽',
    description: 'Code cleanup without behavior changes',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },

  migration: {
    type: 'migration',
    title: 'Migrations',
    icon: '🚚',
    description: 'Migration-related changes',
    allowsBreakingChange: true,
    defaultReleaseType: 'major',
    isReleaseRelevant: true,
    deprecated: false,
  },

  rollback: {
    type: 'rollback',
    title: 'Rollbacks',
    icon: '↩️',
    description: 'Rollback changes after a bad release',
    allowsBreakingChange: false,
    defaultReleaseType: 'none',
    isReleaseRelevant: false,
    deprecated: false,
  },
} as const satisfies Record<string, CommitTypeMeta>;

/**
 * Union type of all supported commit types.
 *
 * Includes standard types (feat, fix, etc.) and the special `BREAKING CHANGE` marker.
 *
 * Derived from the keys of {@link COMMIT_TYPES}.
 */
export type CommitType = keyof typeof COMMIT_TYPES;

/**
 * List of all supported commit type values.
 *
 * Useful for validation, selection prompts, and tooling.
 */
export const COMMIT_TYPE_VALUES = Object.keys(COMMIT_TYPES) as CommitType[];
