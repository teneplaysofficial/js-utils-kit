import type { Stats } from 'node:fs';
import { access, stat } from 'node:fs/promises';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { exists, getContentSize, isDirectory, isFile } from '../src';

vi.mock('node:fs/promises', () => ({
  access: vi.fn(),
  stat: vi.fn(),
}));

const mockAccess = vi.mocked(access);
const mockStat = vi.mocked(stat);

describe('exists', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns true when file exists', async () => {
    mockAccess.mockResolvedValue(undefined);

    const result = await exists('file.txt');

    expect(result).toBe(true);
    expect(mockAccess).toHaveBeenCalledWith('file.txt');
  });

  it('returns false when file does not exist', async () => {
    mockAccess.mockRejectedValue(new Error('not found'));

    const result = await exists('missing.txt');

    expect(result).toBe(false);
    expect(mockAccess).toHaveBeenCalledWith('missing.txt');
  });
});

describe('isFile', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return true if path is a file', async () => {
    mockStat.mockResolvedValue({
      isFile: () => true,
    } as Stats);

    const result = await isFile('file.txt');
    expect(result).toBe(true);
    expect(mockStat).toHaveBeenCalledWith('file.txt');
  });

  it('should return false if path is not a file', async () => {
    mockStat.mockResolvedValue({
      isFile: () => false,
    } as Stats);

    const result = await isFile('dir');
    expect(result).toBe(false);
  });

  it('should return false if stat throws', async () => {
    mockStat.mockRejectedValue(new Error('not found'));

    const result = await isFile('missing.txt');
    expect(result).toBe(false);
  });
});

describe('isDirectory', () => {
  it('should return true if path is a directory', async () => {
    mockStat.mockResolvedValue({
      isDirectory: () => true,
    } as Stats);

    const result = await isDirectory('folder');
    expect(result).toBe(true);
  });

  it('should return false if path is not a directory', async () => {
    mockStat.mockResolvedValue({
      isDirectory: () => false,
    } as Stats);

    const result = await isDirectory('file.txt');
    expect(result).toBe(false);
  });

  it('should return false if stat throws', async () => {
    mockStat.mockRejectedValue(new Error('error'));

    const result = await isDirectory('missing');
    expect(result).toBe(false);
  });
});

describe('getContentSize', () => {
  it('should return file size', async () => {
    mockStat.mockResolvedValue({
      size: 1024,
    } as Stats);

    const result = await getContentSize('file.txt');
    expect(result).toBe(1024);
  });

  it('should return 0 if stat throws', async () => {
    mockStat.mockRejectedValue(new Error('error'));

    const result = await getContentSize('missing');
    expect(result).toBe(0);
  });

  it('should return 0 if size is undefined', async () => {
    mockStat.mockResolvedValue({} as Stats);

    const result = await getContentSize('weird');
    expect(result).toBe(0);
  });
});
