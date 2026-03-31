import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('isBrowser (happy-dom)', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllGlobals();
  });

  it('returns true in browser environment (happy-dom)', async () => {
    const { isBrowser } = await import('../src/checks');
    expect(isBrowser).toBe(true);
  });

  it('returns false when window.document is missing', async () => {
    vi.stubGlobal('window', {});

    const { isBrowser } = await import('../src/checks');

    expect(isBrowser).toBe(false);
  });

  it('returns false when window is undefined', async () => {
    vi.stubGlobal('window', undefined);

    const { isBrowser } = await import('../src/checks');

    expect(isBrowser).toBe(false);
  });

  it('is stable across multiple imports', async () => {
    const mod1 = await import('../src/checks');
    const mod2 = await import('../src/checks');

    expect(mod1.isBrowser).toBe(mod2.isBrowser);
  });
});
