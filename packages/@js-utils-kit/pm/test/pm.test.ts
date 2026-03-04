import { exists } from '@js-utils-kit/fs';
import { detectPM } from '../src';
import { readFile } from 'node:fs/promises';
import { beforeEach, expect, it, vi } from 'vitest';

vi.mock('node:fs/promises', () => ({
  readFile: vi.fn(),
}));

vi.mock('@js-utils-kit/fs', () => ({
  exists: vi.fn(),
}));

const mockExists = vi.mocked(exists);
const mockReadFile = vi.mocked(readFile);

beforeEach(() => {
  vi.clearAllMocks();
  delete process.env.npm_config_user_agent;
});

it('detects npm from user agent', async () => {
  process.env.npm_config_user_agent = 'npm/10.0.0';

  const result = await detectPM({
    lockfile: false,
    packageJson: false,
  });

  expect(result.name).toBe('npm');
  expect(result.isNpm).toBe(true);
});

it('detects yarn from user agent', async () => {
  process.env.npm_config_user_agent = 'yarn/1.22.0';

  const result = await detectPM({
    lockfile: false,
    packageJson: false,
  });

  expect(result.name).toBe('yarn');
  expect(result.isYarn).toBe(true);
});

it('detects bun from user agent', async () => {
  process.env.npm_config_user_agent = 'bun/1.1.0';

  const result = await detectPM({
    lockfile: false,
    packageJson: false,
  });

  expect(result.name).toBe('bun');
  expect(result.isBun).toBe(true);
});

it('detects pnpm from user agent', async () => {
  process.env.npm_config_user_agent = 'pnpm/9.0.0';

  const result = await detectPM({
    lockfile: false,
    packageJson: false,
  });

  expect(result.name).toBe('pnpm');
  expect(result.isPnpm).toBe(true);
});

it('detects pnpm from lockfile', async () => {
  mockExists.mockImplementation(async (path: string) =>
    Promise.resolve(path.includes('pnpm-lock.yaml')),
  );

  const result = await detectPM();

  expect(result.name).toBe('pnpm');
});

it('detects yarn from lockfile', async () => {
  mockExists.mockImplementation(async (path: string) =>
    Promise.resolve(path.includes('yarn.lock')),
  );

  const result = await detectPM();

  expect(result.name).toBe('yarn');
});

it('detects npm from lockfile', async () => {
  mockExists.mockImplementation(async (path: string) =>
    Promise.resolve(path.includes('package-lock.json')),
  );

  const result = await detectPM();

  expect(result.name).toBe('npm');
});

it('detects bun from bun.lock', async () => {
  mockExists.mockImplementation(async (path: string) => Promise.resolve(path.includes('bun.lock')));

  const result = await detectPM();

  expect(result.name).toBe('bun');
});

it('detects bun from bun.lockb', async () => {
  mockExists.mockImplementation(async (path: string) =>
    Promise.resolve(path.includes('bun.lockb')),
  );

  const result = await detectPM();

  expect(result.name).toBe('bun');
});

it('detects package manager from package.json', async () => {
  mockExists.mockResolvedValue(false);

  mockReadFile.mockResolvedValue(
    JSON.stringify({
      packageManager: 'pnpm@9.0.0',
    }),
  );

  const result = await detectPM();

  expect(result.name).toBe('pnpm');
});

it('ignores package.json when disabled', async () => {
  mockExists.mockResolvedValue(false);

  mockReadFile.mockResolvedValue(
    JSON.stringify({
      packageManager: 'pnpm@9.0.0',
    }),
  );

  const result = await detectPM({
    packageJson: false,
  });

  expect(result.name).toBeUndefined();
});

it('returns undefined when nothing detected', async () => {
  mockExists.mockResolvedValue(false);
  mockReadFile.mockRejectedValue(new Error('not found'));

  const result = await detectPM();

  expect(result.name).toBeUndefined();
  expect(result.isPackageManager).toBe(false);
});
