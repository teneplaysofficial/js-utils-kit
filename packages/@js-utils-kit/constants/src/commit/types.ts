export const COMMIT_TYPES = Object.freeze({
  feat: {
    type: 'feat',
    description: 'Introduce a new feature',
    allowBreaking: true,
  },
  fix: {
    type: 'fix',
    description: 'Fix a bug',
    allowBreaking: true,
  },
  docs: {
    type: 'docs',
    description: 'Documentation only changes',
    allowBreaking: false,
  },
  style: {
    type: 'style',
    description: 'Formatting or style changes that do not affect code behavior',
    allowBreaking: false,
  },
  refactor: {
    type: 'refactor',
    description: 'Code change that neither fixes a bug nor adds a feature',
    allowBreaking: true,
  },
  perf: {
    type: 'perf',
    description: 'Improve performance',
    allowBreaking: true,
  },
  test: {
    type: 'test',
    description: 'Add or update tests',
    allowBreaking: false,
  },
  build: {
    type: 'build',
    description: 'Changes affecting build system or dependencies',
    allowBreaking: false,
  },
  ci: {
    type: 'ci',
    description: 'CI/CD related changes',
    allowBreaking: false,
  },
  chore: {
    type: 'chore',
    description: 'Maintenance tasks',
    allowBreaking: false,
  },
  revert: {
    type: 'revert',
    description: 'Revert a previous commit',
    allowBreaking: false,
  },
  deps: {
    type: 'deps',
    description: 'Update, add, or remove dependencies',
    allowBreaking: false,
  },
  config: {
    type: 'config',
    description: 'Configuration changes',
    allowBreaking: false,
  },
  security: {
    type: 'security',
    description: 'Security fixes or vulnerability mitigation',
    allowBreaking: true,
  },
  types: {
    type: 'types',
    description: 'Type definitions or TypeScript-related changes',
    allowBreaking: false,
  },
  lint: {
    type: 'lint',
    description: 'Linting rules or fixes',
    allowBreaking: false,
  },
  format: {
    type: 'format',
    description: 'Code formatting changes (prettier, etc.)',
    allowBreaking: false,
  },
  release: {
    type: 'release',
    description: 'Release-related changes (versioning, tags, changelog)',
    allowBreaking: false,
  },
  meta: {
    type: 'meta',
    description: 'Repository metadata (README, templates, tooling)',
    allowBreaking: false,
  },
  infra: {
    type: 'infra',
    description: 'Infrastructure or environment-related changes',
    allowBreaking: false,
  },
  hotfix: {
    type: 'hotfix',
    description: 'Critical production fix applied quickly',
    allowBreaking: true,
  },
  version: {
    type: 'version',
    description: 'Version bumps without code changes',
    allowBreaking: false,
  },
  workflow: {
    type: 'workflow',
    description: 'Workflow-related changes (GitHub Actions, hooks)',
    allowBreaking: false,
  },
  package: {
    type: 'package',
    description: 'Package-level changes in a monorepo',
    allowBreaking: false,
  },
  workspace: {
    type: 'workspace',
    description: 'Workspace or monorepo configuration changes',
    allowBreaking: false,
  },
  api: {
    type: 'api',
    description: 'API surface or contract changes',
    allowBreaking: true,
  },
  breaking: {
    type: 'breaking',
    description: 'Explicit breaking change commit',
    allowBreaking: true,
  },
  db: {
    type: 'db',
    description: 'Database schema, migrations, or queries',
    allowBreaking: true,
  },
  data: {
    type: 'data',
    description: 'Data fixes, seeds, or transformations',
    allowBreaking: false,
  },
  ui: {
    type: 'ui',
    description: 'UI-related changes',
    allowBreaking: false,
  },
  ux: {
    type: 'ux',
    description: 'User experience improvements',
    allowBreaking: false,
  },
  accessibility: {
    type: 'accessibility',
    description: 'Accessibility improvements (a11y)',
    allowBreaking: false,
  },
  backend: {
    type: 'backend',
    description: 'Backend logic changes',
    allowBreaking: true,
  },
  frontend: {
    type: 'frontend',
    description: 'Frontend logic changes',
    allowBreaking: false,
  },
  logging: {
    type: 'logging',
    description: 'Logging changes or improvements',
    allowBreaking: false,
  },
  monitoring: {
    type: 'monitoring',
    description: 'Monitoring, metrics, or tracing',
    allowBreaking: false,
  },
  stability: {
    type: 'stability',
    description: 'Stability and reliability improvements',
    allowBreaking: false,
  },
  optimization: {
    type: 'optimization',
    description: 'Code or runtime optimizations',
    allowBreaking: false,
  },
  dx: {
    type: 'dx',
    description: 'Developer experience improvements',
    allowBreaking: false,
  },
  tooling: {
    type: 'tooling',
    description: 'Developer tools or internal utilities',
    allowBreaking: false,
  },
  scripts: {
    type: 'scripts',
    description: 'Automation or helper script changes',
    allowBreaking: false,
  },
  cleanup: {
    type: 'cleanup',
    description: 'Code cleanup without behavior changes',
    allowBreaking: false,
  },
  migration: {
    type: 'migration',
    description: 'Migration-related changes',
    allowBreaking: true,
  },
  rollback: {
    type: 'rollback',
    description: 'Rollback changes after a bad release',
    allowBreaking: false,
  },
} satisfies Record<string, CommitTypeMeta>);

export interface CommitTypeMeta {
  type: string;
  description: string;
  allowBreaking: boolean;
}

export type CommitType = keyof typeof COMMIT_TYPES;

export const COMMIT_TYPE_LIST = Object.keys(COMMIT_TYPES) as CommitType[];
