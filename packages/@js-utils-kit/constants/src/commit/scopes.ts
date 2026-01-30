export const COMMIT_SCOPES = {
  // Core
  core: {
    scope: 'core',
    description: 'Core logic and public APIs',
  },
  utils: {
    scope: 'utils',
    description: 'Utility helpers and shared functions',
  },
  shared: {
    scope: 'shared',
    description: 'Shared internal modules',
  },

  // Config / deps
  config: {
    scope: 'config',
    description: 'Configuration and setup files',
  },
  deps: {
    scope: 'deps',
    description: 'Dependency updates',
  },
  env: {
    scope: 'env',
    description: 'Environment variables and environment setup',
  },

  // Build / CI / release
  build: {
    scope: 'build',
    description: 'Build tools, bundlers, transpilers',
  },
  ci: {
    scope: 'ci',
    description: 'CI pipelines and workflows',
  },
  release: {
    scope: 'release',
    description: 'Versioning, changelog, and release automation',
  },
  workflow: {
    scope: 'workflow',
    description: 'GitHub Actions, hooks, and automation workflows',
  },

  // Docs & tests
  docs: {
    scope: 'docs',
    description: 'Documentation and markdown files',
  },
  test: {
    scope: 'test',
    description: 'Unit, integration, or e2e tests',
  },
  fixtures: {
    scope: 'fixtures',
    description: 'Test fixtures, mocks, and test data',
  },

  // Frontend
  ui: {
    scope: 'ui',
    description: 'UI-related logic or components',
  },
  hooks: {
    scope: 'hooks',
    description: 'Custom hooks or reactive helpers',
  },
  styles: {
    scope: 'styles',
    description: 'Styling, themes, visual changes',
  },
  assets: {
    scope: 'assets',
    description: 'Static assets such as images, fonts, or icons',
  },
  a11y: {
    scope: 'a11y',
    description: 'Accessibility improvements',
  },
  dist: {
    scope: 'dist',
    description: 'Distribution artifacts and output files',
  },
  bundle: {
    scope: 'bundle',
    description: 'Bundling and output optimization',
  },

  // Compatibility & runtime
  compat: {
    scope: 'compat',
    description: 'Backward or cross-platform compatibility fixes',
  },
  runtime: {
    scope: 'runtime',
    description: 'Runtime behavior or environment-specific logic',
  },

  // Performance & memory (when perf is not enough)
  memory: {
    scope: 'memory',
    description: 'Memory usage or leak fixes',
  },

  // Error handling
  error: {
    scope: 'error',
    description: 'Error handling and edge-case fixes',
  },

  // Experiments / spikes
  experiment: {
    scope: 'experiment',
    description: 'Experimental or proof-of-concept changes',
  },
  pkg: {
    scope: 'pkg',
    description: 'Package metadata and npm-related changes',
  },
  publish: {
    scope: 'publish',
    description: 'Publishing workflow and registry-related changes',
  },
  export: {
    scope: 'export',
    description: 'Public exports and entry-point changes',
  },
  // Backend / API
  api: {
    scope: 'api',
    description: 'API contracts and handlers',
  },
  server: {
    scope: 'server',
    description: 'Server runtime logic',
  },
  backend: {
    scope: 'backend',
    description: 'Backend-specific logic',
  },

  // Data / auth
  db: {
    scope: 'db',
    description: 'Database schema, migrations, or queries',
  },
  data: {
    scope: 'data',
    description: 'Data fixes, seeds, or transformations',
  },
  auth: {
    scope: 'auth',
    description: 'Authentication or authorization logic',
  },

  // Quality & DX
  lint: {
    scope: 'lint',
    description: 'Linting and static analysis',
  },
  format: {
    scope: 'format',
    description: 'Formatting tools (Prettier, etc.)',
  },
  types: {
    scope: 'types',
    description: 'Type definitions or TypeScript-related changes',
  },
  dx: {
    scope: 'dx',
    description: 'Developer experience improvements',
  },

  // Tooling / scripts
  scripts: {
    scope: 'scripts',
    description: 'Automation and helper scripts',
  },
  tooling: {
    scope: 'tooling',
    description: 'Internal developer tooling',
  },

  // Infra / ops
  infra: {
    scope: 'infra',
    description: 'Infrastructure and deployment-related changes',
  },
  monitoring: {
    scope: 'monitoring',
    description: 'Monitoring, metrics, and observability',
  },
  logging: {
    scope: 'logging',
    description: 'Logging configuration or improvements',
  },

  meta: {
    scope: 'meta',
    description: 'Repository metadata and non-code changes',
  },
  ts: {
    scope: 'ts',
    description: 'TypeScript-specific configuration or behavior',
  },
  js: {
    scope: 'js',
    description: 'JavaScript runtime-specific changes',
  },
  node: {
    scope: 'node',
    description: 'Node.js-specific logic or compatibility',
  },
  browser: {
    scope: 'browser',
    description: 'Browser-specific behavior or fixes',
  },
  cache: {
    scope: 'cache',
    description: 'Caching logic or cache invalidation changes',
  },
  concurrency: {
    scope: 'concurrency',
    description: 'Concurrency, async, or worker-related changes',
  },
  threading: {
    scope: 'threading',
    description: 'Threading or parallel execution logic',
  },
  validation: {
    scope: 'validation',
    description: 'Input validation and schema enforcement',
  },
  guards: {
    scope: 'guards',
    description: 'Runtime guards and safety checks',
  },
  fallback: {
    scope: 'fallback',
    description: 'Fallback and recovery logic',
  },
  http: {
    scope: 'http',
    description: 'HTTP client or request handling',
  },
  fs: {
    scope: 'fs',
    description: 'Filesystem-related changes',
  },
  stream: {
    scope: 'stream',
    description: 'Streams and streaming logic',
  },
  state: {
    scope: 'state',
    description: 'State management and data flow',
  },
  store: {
    scope: 'store',
    description: 'Persistent or in-memory storage logic',
  },
  sync: {
    scope: 'sync',
    description: 'Synchronization logic',
  },
  permissions: {
    scope: 'permissions',
    description: 'Permission and access control rules',
  },
  secrets: {
    scope: 'secrets',
    description: 'Secrets handling and sensitive config',
  },
  audit: {
    scope: 'audit',
    description: 'Security audits and vulnerability reviews',
  },
  examples: {
    scope: 'examples',
    description: 'Examples and usage demos',
  },
  guides: {
    scope: 'guides',
    description: 'Guides and long-form documentation',
  },
  faq: {
    scope: 'faq',
    description: 'FAQ and common-issues documentation',
  },
  policy: {
    scope: 'policy',
    description: 'Contribution rules and governance policies',
  },
  legal: {
    scope: 'legal',
    description: 'Licensing, legal text, and compliance',
  },
  compliance: {
    scope: 'compliance',
    description: 'Compliance-related changes',
  },
} as const;

export type CommitScope = keyof typeof COMMIT_SCOPES;
export type CommitScopeMeta = (typeof COMMIT_SCOPES)[CommitScope];

export const COMMIT_SCOPE_LIST = Object.keys(COMMIT_SCOPES) as CommitScope[];
