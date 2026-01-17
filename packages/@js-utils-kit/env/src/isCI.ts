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
  'CI',
  'CI_XCODE_PROJECT',
  'CIRCLECI',
  'CIRRUS_CI',
  'CM_BUILD_ID',
  'CODEBUILD_BUILD_ARN',
  'CONTINUOUS_INTEGRATION',
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
  'NODE',
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

/** CI provider identifiers exposed via the `CI_NAME` */
const NAMES = ['codeship', 'sourcehut', 'woodpecker'] as const;

const check = (key: string) =>
  key in env && env[key] != null && env[key] !== '0' && env[key].toLowerCase() !== 'false';

/**
 * Determines whether the current runtime environment is a Continuous Integration (CI) environment.
 *
 * Detection is performed by:
 * 1. Checking for known CI-specific environment variables
 * 2. Checking value-based CI identifiers via `CI_NAME`
 *
 * @example
 * ```ts
 * if (isCI) {
 *   console.log("Running in CI");
 * }
 * ```
 *
 * @returns `true` if running inside a CI environment
 */
export const isCI =
  KEYS.some(check) ||
  (typeof env.CI_NAME === 'string' &&
    NAMES.includes(env.CI_NAME.toLowerCase() as (typeof NAMES)[number]));

export default isCI;
