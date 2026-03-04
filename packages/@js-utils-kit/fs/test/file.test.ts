import { exists } from '../src';
import { access } from 'node:fs/promises';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('node:fs/promises', () => ({
  access: vi.fn(),
}));

const mockAccess = vi.mocked(access);

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
