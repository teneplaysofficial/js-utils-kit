import { env } from 'node:process';

/** Environment variable keys */
const KEYS = [
  'AC_APPCIRCLE',
  'AGOLA_GIT_REF',
  'APPCENTER_BUILD_ID',
  'APPVEYOR',
  'bamboo_planKey',
  'BITBUCKET_COMMIT',
  'BITRISE_IO',
  'BUDDY_WORKSPACE_ID',
  'BUILD_ID',
  'BUILD_NUMBER',
  'BUILDER_OUTPUT',
  'BUILDKITE',
  'CF_BUILD_ID',
  'CF_PAGES',
  'CI_XCODE_PROJECT',
  'CIRCLECI',
  'CIRRUS_CI',
  'CM_BUILD_ID',
  'CODEBUILD_BUILD_ARN',
  'DRONE',
  'DSARI',
  'EARTHLY_CI',
  'EAS_BUILD',
  'GERRIT_PROJECT',
  'GITEA_ACTIONS',
  'GITHUB_ACTIONS',
  'GITLAB_CI',
  'GO_PIPELINE_LABEL',
  'HARNESS_BUILD_ID',
  'HUDSON_URL',
  'JENKINS_URL',
  'LAYERCI',
  'MAGNUM',
  'NETLIFY',
  'NEVERCODE',
  'NOW_BUILDER',
  'PROW_JOB_ID',
  'RELEASE_BUILD_ID',
  'RENDER',
  'RUN_ID',
  'SAILCI',
  'SCREWDRIVER',
  'SEMAPHORE',
  'STRIDER',
  'TASK_ID',
  'TEAMCITY_VERSION',
  'TF_BUILD',
  'TRAVIS',
  'VELA',
  'VERCEL',
  'WORKERS_CI',
  'XCS',
] as const;

/** Generic CI flags (can be set by tools like npx) */
const GENERIC_KEYS = ['CI', 'CONTINUOUS_INTEGRATION'] as const;

/** CI provider identifiers exposed via the `CI_NAME` */
const NAMES = ['codeship', 'sourcehut', 'woodpecker'] as const;

const check = (key: string) => {
  const value = env[key] ?? env[key.toUpperCase()] ?? env[key.toLowerCase()];

  return value != null && value !== '0' && value.toLowerCase() !== 'false';
};

const hasProviderKey = KEYS.some(check);

/**
 * Determines whether the current runtime environment is a Continuous Integration (CI) environment.
 *
 * Detection is conservative to avoid false positives in local development.
 * It works as follows:
 *
 * 1. Immediately returns `true` if a known CI provider environment variable is present
 *    (e.g. GitHub Actions, GitLab CI, CircleCI, etc.).
 * 2. If only generic CI flags (such as `CI` or `CONTINUOUS_INTEGRATION`) are present,
 *    they are considered valid **only when** backed by a real CI provider signal
 *    or a known `CI_NAME` identifier.
 *
 * This prevents tools like `npx`, npm, or local shells from incorrectly causing CI detection while preserving correct behavior in real CI environments.
 *
 * @example
 * ```ts
 * if (isCI) {
 *   console.log("Running in CI");
 * }
 * ```
 *
 * @returns `true` if running inside a CI environment, otherwise `false`.
 */
export const isCI =
  hasProviderKey ||
  (GENERIC_KEYS.some(check) &&
    (hasProviderKey ||
      (typeof env.CI_NAME === 'string' &&
        NAMES.includes(env.CI_NAME.toLowerCase() as (typeof NAMES)[number]))));

export default isCI;
