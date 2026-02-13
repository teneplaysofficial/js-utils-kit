import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { Environment } from '@js-utils-kit/types';

const originalEnv = process.env.NODE_ENV;

afterAll(() => {
  process.env.NODE_ENV = originalEnv;
});

beforeEach(() => {
  vi.resetModules();
});

async function loadRuntime() {
  return await import('../src/runtime');
}

describe('isDev', () => {
  it('returns true when NODE_ENV is development', async () => {
    process.env.NODE_ENV = Environment.DEV;
    const { isDev } = await loadRuntime();
    expect(isDev).toBe(true);
  });

  it('returns false otherwise', async () => {
    process.env.NODE_ENV = Environment.TEST;
    const { isDev } = await loadRuntime();
    expect(isDev).toBe(false);
  });
});

describe('isProd', () => {
  it('returns true when NODE_ENV is production', async () => {
    process.env.NODE_ENV = Environment.PROD;
    const { isProd } = await loadRuntime();
    expect(isProd).toBe(true);
  });
});

describe('isTest', () => {
  it('returns true when NODE_ENV is test', async () => {
    process.env.NODE_ENV = Environment.TEST;
    const { isTest } = await loadRuntime();
    expect(isTest).toBe(true);
  });
});

describe('isNode', () => {
  it('returns true in Node.js environment', async () => {
    const { isNode, isBrowser } = await loadRuntime();
    expect(isNode).toBe(true);
    expect(isBrowser).toBe(false);
  });
});
