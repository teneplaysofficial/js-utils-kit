import path from 'path';
import { describe, it, expect } from 'vitest';
import { toPlatformPath, toPosixPath, toWinPath } from '../src';

describe('toPosixPath', () => {
  it('converts backslashes to forward slashes', () => {
    expect(toPosixPath('C:\\Users\\TenE')).toBe('C:/Users/TenE');
  });

  it('keeps forward slashes unchanged', () => {
    expect(toPosixPath('src/utils/file.ts')).toBe('src/utils/file.ts');
  });

  it('handles mixed separators', () => {
    expect(toPosixPath('src\\utils/file.ts')).toBe('src/utils/file.ts');
  });
});

describe('toWinPath', () => {
  it('converts forward slashes to backslashes', () => {
    expect(toWinPath('src/utils/file.ts')).toBe('src\\utils\\file.ts');
  });

  it('keeps backslashes unchanged', () => {
    expect(toWinPath('C:\\Users\\TenE')).toBe('C:\\Users\\TenE');
  });

  it('handles mixed separators', () => {
    expect(toWinPath('src\\utils/file.ts')).toBe('src\\utils\\file.ts');
  });
});

describe('toPlatformPath', () => {
  it('normalizes to current platform separator', () => {
    const expected = `src${path.sep}utils${path.sep}file.ts`;

    expect(toPlatformPath('src/utils/file.ts')).toBe(expected);
    expect(toPlatformPath('src\\utils\\file.ts')).toBe(expected);
    expect(toPlatformPath('src\\utils/file.ts')).toBe(expected);
  });
});
