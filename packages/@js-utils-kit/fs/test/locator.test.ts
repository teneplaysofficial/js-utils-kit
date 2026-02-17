import path from 'path';
import { it, expect } from 'vitest';
import { locateModuleFile, locateModuleDirectory, resolveModuleRelative } from '../src';

it('returns current test file path (ESM)', () => {
  const file = locateModuleFile(import.meta.url);
  expect(path.isAbsolute(file)).toBe(true);
  expect(file).toMatch(/locator\.test\.(ts|js)$/);
});

it('returns current directory path', () => {
  const dir = locateModuleDirectory(import.meta.url);
  expect(path.isAbsolute(dir)).toBe(true);
  expect(dir).toContain('test');
});

it('resolves relative path correctly', () => {
  const resolved = resolveModuleRelative('../src/locator.ts', import.meta.url);
  expect(path.isAbsolute(resolved)).toBe(true);
  expect(resolved).toMatch(/src/);
});

it('uses CommonJS fallback when metaUrl not provided', () => {
  const file = locateModuleFile();
  expect(path.isAbsolute(file)).toBe(true);
});
