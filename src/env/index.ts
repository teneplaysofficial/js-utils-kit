export * from './environment';

import { getRunTimeEnvironment, isProd, isDev, isTest, isNode, isBrowser } from './environment';

export default {
  getRunTimeEnvironment,
  isProd,
  isDev,
  isTest,
  isNode,
  isBrowser,
};
