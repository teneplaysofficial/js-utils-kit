import path from 'path';
import { describe, it, expect } from 'vitest';
import { locateModuleFile, locateModuleDirectory, resolveModuleRelative } from '../src';

describe('locateModuleFile', () => {
  it('returns absolute path when using ESM import.meta.url', () => {
    const file = locateModuleFile(import.meta.url);

    expect(path.isAbsolute(file)).toBe(true);
    expect(file).toMatch(/locator\.test\.(ts|js)$/);
  });

  it('returns exact __filename when using CommonJS', () => {
    const file = locateModuleFile(__filename);

    expect(file).toBe(__filename);
    expect(path.basename(file)).toBe('locator.test.ts');
  });

  it('converts file URL string to file system path', () => {
    const fileUrl = `file://${__filename.replace(/\\/g, '/')}`;
    const result = locateModuleFile(fileUrl);

    expect(result).toBe(__filename);
  });

  it('throws if no module path is provided', () => {
    expect(() => locateModuleFile(undefined as unknown as string)).toThrow(
      /requires import\.meta\.url/i,
    );
  });

  it('throws if empty string is provided', () => {
    expect(() => locateModuleFile('')).toThrow();
  });
});

describe('locateModuleDirectory', () => {
  it('returns directory from import.meta.url', () => {
    const dir = locateModuleDirectory(import.meta.url);

    expect(path.isAbsolute(dir)).toBe(true);
    expect(dir).toBe(path.dirname(locateModuleFile(import.meta.url)));
  });

  it('returns directory from __filename', () => {
    const dir = locateModuleDirectory(__filename);

    expect(dir).toBe(__dirname);
  });
});

describe('resolveModuleRelative', () => {
  it('resolves relative path from ESM module', () => {
    const resolved = resolveModuleRelative('../src/locator.ts', import.meta.url);

    expect(path.isAbsolute(resolved)).toBe(true);
    expect(resolved).toContain(path.join('src', 'locator'));
  });

  it('resolves relative path from CommonJS module', () => {
    const resolved = resolveModuleRelative('../src/locator.ts', __filename);

    expect(path.isAbsolute(resolved)).toBe(true);
    expect(resolved).toContain(path.join('src', 'locator'));
  });

  it('resolves simple relative file in same directory', () => {
    const resolved = resolveModuleRelative('./locator.test.ts', __filename);

    expect(resolved).toBe(path.join(__dirname, 'locator.test.ts'));
  });

  it('throws if module path is not provided', () => {
    expect(() =>
      resolveModuleRelative('../src/locator.ts', undefined as unknown as string),
    ).toThrow();
  });
});
