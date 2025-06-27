import fs from 'fs';
import archiver from 'archiver';
import { createArchive } from '../src/file/createArchive';

jest.mock('fs');
jest.mock('archiver');

describe('createArchive', () => {
  const mockOutput = {
    on: jest.fn(),
    once: jest.fn(),
    emit: jest.fn(),
    end: jest.fn(),
  };

  const mockArchive = {
    pipe: jest.fn(),
    directory: jest.fn(),
    finalize: jest.fn(),
    pointer: jest.fn().mockReturnValue(1024),
    on: jest.fn(),
  };

  beforeEach(() => {
    (fs.createWriteStream as jest.Mock).mockReturnValue(mockOutput);
    (archiver as unknown as jest.Mock).mockReturnValue(mockArchive);
    jest.clearAllMocks();
  });

  it('creates a zip archive and resolves on success', async () => {
    const promise = createArchive({
      format: 'zip',
      source: 'src',
      destination: 'out.zip',
    });

    // Simulate close event
    const closeCallback = mockOutput.on.mock.calls.find(
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
    const errorCallback = mockArchive.on.mock.calls.find(
      (call) => call[0] === 'error',
    )?.[1];
    const error = new Error('Archiver failed');
    errorCallback?.(error);

    await expect(promise).rejects.toThrow('Archiver failed');
  });
});
