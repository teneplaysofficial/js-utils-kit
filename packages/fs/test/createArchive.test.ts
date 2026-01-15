import fs from 'fs';
import archiver from 'archiver';
import { beforeEach, expect, it, Mock, vi } from 'vitest';
import { createArchive } from '../src';

vi.mock('fs');
vi.mock('archiver');

const mockOutput = {
  on: vi.fn(),
  once: vi.fn(),
  emit: vi.fn(),
  end: vi.fn(),
};

const mockArchive = {
  pipe: vi.fn(),
  directory: vi.fn(),
  finalize: vi.fn(),
  pointer: vi.fn().mockReturnValue(1024),
  on: vi.fn(),
};

beforeEach(() => {
  (fs.createWriteStream as Mock).mockReturnValue(mockOutput);
  (fs.existsSync as Mock).mockReturnValue(true);
  (fs.statSync as Mock).mockReturnValue({
    isDirectory: () => true,
  });
  mockArchive.finalize.mockReturnValue(Promise.resolve());
  (archiver as unknown as Mock).mockReturnValue(mockArchive);
  vi.clearAllMocks();
});

it('creates a zip archive and resolves on success', async () => {
  const promise = createArchive({
    format: 'zip',
    source: 'src',
    destination: 'out.zip',
  });

  // Simulate close event
  const closeCallback = (mockOutput.on.mock.calls as [string, (...args: unknown[]) => void][]).find(
    (call) => call[0] === 'close',
  )?.[1];
  closeCallback?.();

  await expect(promise).resolves.toBeUndefined();

  expect(fs.createWriteStream).toHaveBeenCalledWith('out.zip');
  expect(archiver).toHaveBeenCalledWith(
    'zip',
    expect.objectContaining({
      zlib: { level: 9 },
    }),
  );
  expect(mockArchive.pipe).toHaveBeenCalledWith(mockOutput);
  expect(mockArchive.directory).toHaveBeenCalledWith('src', false);
  expect(mockArchive.finalize).toHaveBeenCalled();
});

it('rejects if archiver emits an error', async () => {
  const promise = createArchive({
    format: 'zip',
    source: 'src',
    destination: 'out.zip',
  });

  // Simulate error event
  const errorCallback = (
    mockArchive.on.mock.calls as [string, (...args: unknown[]) => void][]
  ).find((call) => call[0] === 'error')?.[1];
  errorCallback?.(new Error('Archiver failed'));

  await expect(promise).rejects.toThrow('Archiver failed');
});

it('rejects if finalize fails', async () => {
  mockArchive.finalize.mockReturnValueOnce(Promise.reject(new Error('Finalize failed')));

  const promise = createArchive({
    format: 'zip',
    source: 'src',
    destination: 'out.zip',
  });

  await expect(promise).rejects.toThrow('Finalize failed');
});
