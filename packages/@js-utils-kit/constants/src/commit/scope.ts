/**
 * Map of supported commit scopes and their descriptions.
 *
 * @format
 * Scopes provide additional context for a commit, typically used as: `type(scope): message`
 *
 * @example
 * `feat(api): add pagination support`
 *
 * @remarks
 * - Keys represent the allowed scope identifiers.
 * - Values describe the area of the codebase the scope applies to.
 */
export const COMMIT_SCOPES = {
  accessibility: 'Accessibility improvements (a11y)',
  ansible: 'Ansible playbooks and automation',
  api: 'API implementation or contracts',
  assets: 'Static assets like images, fonts, media',
  auth: 'Authentication and authorization logic',
  aws: 'AWS-related configuration or services',
  azure: 'Azure-related configuration or services',
  babel: 'Babel configuration or transforms',
  backend: 'Backend services and server-side logic',
  build: 'Build system configuration',
  'build-scripts': 'Scripts related to building the project',
  cache: 'Caching mechanisms and logic',
  cd: 'Continuous deployment setup',
  changelog: 'Changelog generation and updates',
  chore: 'General maintenance tasks',
  ci: 'Continuous integration setup',
  'ci-config': 'CI configuration files',
  'ci-tests': 'Tests executed in CI pipelines',
  cli: 'Command-line interface',
  client: 'Client-side logic',
  compliance: 'Compliance, audits, or policy-related changes',
  components: 'Reusable components',
  config: 'Configuration files and settings',
  contrib: 'Community or contributor-related changes',
  core: 'Core application or library logic',
  css: 'CSS and styling changes',
  db: 'Database-related changes',
  demo: 'Demo or example implementations',
  deploy: 'Deployment configuration and scripts',
  deps: 'Production dependencies',
  'deps-dev': 'Development dependencies',
  desktop: 'Desktop application logic',
  devops: 'DevOps tooling and processes',
  docker: 'Dockerfiles and container configuration',
  docs: 'General documentation',
  dotfiles: 'Dotfiles and editor configuration',
  e2e: 'End-to-end tests',
  eslint: 'ESLint configuration and rules',
  examples: 'Example code and samples',
  fixtures: 'Test fixtures and sample data',
  format: 'Code formatting changes',
  frontend: 'Frontend application logic',
  gcp: 'Google Cloud Platform related changes',
  helm: 'Helm charts and Kubernetes packaging',
  i18n: 'Internationalization',
  images: 'Image assets',
  infra: 'Infrastructure configuration',
  integration: 'Integration-related logic',
  jest: 'Jest configuration or tests',
  k8s: 'Kubernetes resources',
  l10n: 'Localization and translations',
  layout: 'Layout-related UI changes',
  lib: 'Shared libraries',
  lint: 'Linting rules and fixes',
  logging: 'Logging-related changes',
  metrics: 'Metrics and monitoring data',
  mobile: 'Mobile application logic',
  mocha: 'Mocha configuration or tests',
  mocks: 'Mock data and utilities',
  monorepo: 'Monorepo configuration',
  observability: 'Observability tooling (logs, metrics, traces)',
  ops: 'Operational tooling and scripts',
  orm: 'ORM configuration or models',
  packages: 'Multiple or shared packages',
  parcel: 'Parcel bundler configuration',
  perf: 'Performance improvements',
  permissions: 'Permission and access control logic',
  pkg: 'Package-related changes',
  prettier: 'Prettier configuration',
  profiling: 'Profiling and performance analysis',
  readme: 'README documentation',
  release: 'Release preparation and metadata',
  responsive: 'Responsive design changes',
  rollup: 'Rollup bundler configuration',
  scripts: 'Automation and helper scripts',
  sdk: 'SDK implementation or changes',
  security: 'Security-related fixes or improvements',
  server: 'Server-side logic',
  storage: 'Storage systems and data persistence',
  storybook: 'Storybook configuration and stories',
  styles: 'Styling and theming',
  terraform: 'Terraform infrastructure code',
  test: 'General testing changes',
  theme: 'UI themes',
  tsc: 'TypeScript compiler configuration',
  tutorials: 'Tutorial content',
  ui: 'User interface changes',
  unit: 'Unit tests',
  ux: 'User experience improvements',
  vite: 'Vite tooling and configuration',
  web: 'Web-related functionality',
  webpack: 'Webpack configuration',
  workspace: 'Workspace or monorepo configuration',
} as const;

/**
 * List of all supported commit scope values.
 *
 * Useful for validation, autocomplete, or CLI prompts.
 */
export const COMMIT_SCOPE_VALUES = Object.keys(COMMIT_SCOPES) as CommitScope[];

/**
 * Union type of all supported commit scopes.
 *
 * Derived from the keys of {@link COMMIT_SCOPES}.
 */
export type CommitScope = keyof typeof COMMIT_SCOPES;
