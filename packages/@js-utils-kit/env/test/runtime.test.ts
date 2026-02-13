import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { Environment } from '@js-utils-kit/types';

const originalEnv = process.env.NODE_ENV;

afterAll(() => {
  process.env.NODE_ENV = originalEnv;
});

async function loadRuntime() {
  vi.resetModules();
  return await import('../src/runtime');
}

beforeEach(() => {
  vi.resetModules();
});

describe('isDev', () => {
  it('isDev returns true when NODE_ENV is development', async () => {
    process.env.NODE_ENV = Environment.DEV;
    const { isDev } = await loadRuntime();
    expect(isDev).toBe(true);
  });

  it('isDev returns false when not development', async () => {
    process.env.NODE_ENV = Environment.TEST;
    const { isDev } = await loadRuntime();
    expect(isDev).toBe(false);
  });
});

describe('isProd', () => {
  it('isProd returns true when NODE_ENV is production', async () => {
    process.env.NODE_ENV = Environment.PROD;
    const { isProd } = await loadRuntime();
    expect(isProd).toBe(true);
  });
});

describe('isTest', () => {
  it('isTest returns true when NODE_ENV is test', async () => {
    process.env.NODE_ENV = Environment.TEST;
    const { isTest } = await loadRuntime();
    expect(isTest).toBe(true);
  });
});

describe('isNode', () => {
  it('isNode returns true in Node.js', async () => {
    const { isNode } = await loadRuntime();
    expect(isNode).toBe(true);
  });
});
