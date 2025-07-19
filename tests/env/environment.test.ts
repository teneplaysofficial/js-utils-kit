import {
  Environment,
  getRunTimeEnvironment,
  isDev,
  isNode,
  isProd,
  isTest,
} from '../../src/env/environment';

describe('Environment checks', () => {
  const originalEnv = process.env.NODE_ENV;

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
  });

  describe('isProd()', () => {
    it('returns true when NODE_ENV is "production"', () => {
      process.env.NODE_ENV = Environment.PROD;
      expect(isProd()).toBe(true);
    });

    it('returns false when NODE_ENV is not "production"', () => {
      process.env.NODE_ENV = Environment.DEV;
      expect(isProd()).toBe(false);
    });
  });

  describe('isDev()', () => {
    it('returns true when NODE_ENV is "development"', () => {
      process.env.NODE_ENV = Environment.DEV;
      expect(isDev()).toBe(true);
    });

    it('returns false when NODE_ENV is not "development"', () => {
      process.env.NODE_ENV = Environment.TEST;
      expect(isDev()).toBe(false);
    });
  });

  describe('isTest()', () => {
    it('returns true when NODE_ENV is "test"', () => {
      process.env.NODE_ENV = Environment.TEST;
      expect(isTest()).toBe(true);
    });

    it('returns false when NODE_ENV is not "test"', () => {
      process.env.NODE_ENV = Environment.PROD;
      expect(isTest()).toBe(false);
    });
  });

  describe('isNode()', () => {
    it('returns true in a Node.js environment', () => {
      expect(isNode()).toBe(true);
    });
  });

  describe('getRunTimeEnvironment()', () => {
    it('returns Environment.UNKNOWN for unrecognized value', () => {
      process.env.NODE_ENV = 'staging';
      expect(getRunTimeEnvironment()).toBe(Environment.UNKNOWN);
    });

    it('returns Environment.UNKNOWN when NODE_ENV is undefined', () => {
      delete process.env.NODE_ENV;
      expect(getRunTimeEnvironment()).toBe(Environment.UNKNOWN);
    });
  });
});
