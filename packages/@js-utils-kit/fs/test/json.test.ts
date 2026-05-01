import { readFile, writeFile } from 'node:fs/promises';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { parseJson, readJsonFile, stringifyJson, writeJsonFile } from '../src';

vi.mock('node:fs/promises', () => ({
  readFile: vi.fn(),
  writeFile: vi.fn(),
}));

const mockReadFile = vi.mocked(readFile);
const mockWriteFile = vi.mocked(writeFile);

beforeEach(() => {
  vi.clearAllMocks();
});

describe('parseJson', () => {
  it('should parse valid JSON string', () => {
    const result = parseJson<{ a: number }>('{"a":1}');
    expect(result).toEqual({ a: 1 });
  });

  it('should throw on invalid JSON', () => {
    expect(() => parseJson('invalid-json')).toThrow();
  });

  it('should preserve types via generics', () => {
    const result = parseJson<{ name: string }>('{"name":"TenE"}');
    expect(result.name).toBe('TenE');
  });
});

describe('stringifyJson', () => {
  it('should stringify with default 2-space indentation', () => {
    const result = stringifyJson({ a: 1 });
    expect(result).toBe(JSON.stringify({ a: 1 }, null, 2));
  });

  it('should respect custom space', () => {
    const result = stringifyJson({ a: 1 }, { space: 4 });
    expect(result).toBe(JSON.stringify({ a: 1 }, null, 4));
  });

  it('should use replacer function', () => {
    const result = stringifyJson(
      { a: 1, b: 2 },
      {
        replacer: (key, value) => (key === 'b' ? undefined : value),
      },
    );

    expect(result).toBe(JSON.stringify({ a: 1 }, null, 2));
  });

  it('should use replacer array', () => {
    const result = stringifyJson({ a: 1, b: 2 }, { replacer: ['a'] });

    expect(result).toBe(JSON.stringify({ a: 1 }, ['a'], 2));
  });
});

describe('readJsonFile', () => {
  it('should read and parse JSON file', async () => {
    mockReadFile.mockResolvedValue('{"a":1}');

    const result = await readJsonFile<{ a: number }>('file.json');

    expect(result).toEqual({ a: 1 });
    expect(mockReadFile).toHaveBeenCalledWith('file.json', 'utf-8');
  });

  it('should throw if readFile fails', async () => {
    mockReadFile.mockRejectedValue(new Error('read error'));

    await expect(readJsonFile('file.json')).rejects.toThrow('read error');
  });

  it('should throw if JSON is invalid', async () => {
    mockReadFile.mockResolvedValue('invalid-json');

    await expect(readJsonFile('file.json')).rejects.toThrow();
  });
});

describe('writeJsonFile', () => {
  it('should stringify and write JSON file', async () => {
    mockWriteFile.mockResolvedValue(undefined);

    await writeJsonFile('file.json', { a: 1 });

    expect(mockWriteFile).toHaveBeenCalledWith(
      'file.json',
      JSON.stringify({ a: 1 }, null, 2),
      'utf-8',
    );
  });

  it('should respect custom space', async () => {
    mockWriteFile.mockResolvedValue(undefined);

    await writeJsonFile('file.json', { a: 1 }, { space: 4 });

    expect(mockWriteFile).toHaveBeenCalledWith(
      'file.json',
      JSON.stringify({ a: 1 }, null, 4),
      'utf-8',
    );
  });

  it('should use replacer', async () => {
    mockWriteFile.mockResolvedValue(undefined);

    await writeJsonFile(
      'file.json',
      { a: 1, b: 2 },
      {
        replacer: (key, value) => (key === 'b' ? undefined : value),
      },
    );

    expect(mockWriteFile).toHaveBeenCalledWith(
      'file.json',
      JSON.stringify({ a: 1 }, null, 2),
      'utf-8',
    );
  });

  it('should throw if writeFile fails', async () => {
    mockWriteFile.mockRejectedValue(new Error('write error'));

    await expect(writeJsonFile('file.json', { a: 1 })).rejects.toThrow('write error');
  });
});
