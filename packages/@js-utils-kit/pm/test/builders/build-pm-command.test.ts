import { describe, expect, it } from '@repo/test-utils';
import { buildPmCommand } from '../../src';

describe('default commands', () => {
  it('should build npm install command', () => {
    expect(buildPmCommand('npm', 'install', 'typescript')).toBe('npm install typescript');
  });

  it('should build pnpm install command', () => {
    expect(buildPmCommand('pnpm', 'install', 'react')).toBe('pnpm add react');
  });

  it('should build yarn install command', () => {
    expect(buildPmCommand('yarn', 'install', 'vitest')).toBe('yarn add vitest');
  });

  it('should return base command without args', () => {
    expect(buildPmCommand('npm', 'install')).toBe('npm install');
  });
});

describe('multiple arguments', () => {
  it('should join multiple package names', () => {
    expect(buildPmCommand('pnpm', 'install', ['react', 'react-dom'])).toBe(
      'pnpm add react react-dom',
    );
  });

  it('should join arguments with spaces', () => {
    expect(buildPmCommand('npm', 'install', ['typescript', 'vitest', '@types/node'])).toBe(
      'npm install typescript vitest @types/node',
    );
  });
});

describe('variants', () => {
  it('should build dev install command', () => {
    expect(buildPmCommand('npm', 'install', 'vitest', 'dev')).toBe('npm install -D vitest');
  });

  it('should build global install command', () => {
    expect(buildPmCommand('npm', 'install', 'typescript', 'global')).toBe(
      'npm install -g typescript',
    );
  });

  it('should build uninstall command', () => {
    expect(buildPmCommand('pnpm', 'uninstall', 'react')).toBe('pnpm remove react');
  });

  it('should build global uninstall command', () => {
    expect(buildPmCommand('yarn', 'uninstall', 'typescript', 'global')).toBe(
      'yarn global remove typescript',
    );
  });

  it('should build bun global install command', () => {
    expect(buildPmCommand('bun', 'install', 'typescript', 'global')).toBe('bun add -g typescript');
  });
});

describe('invalid cases', () => {
  it('should return undefined for invalid package manager', () => {
    expect(buildPmCommand('invalid' as never, 'install', 'typescript')).toBeUndefined();
  });

  it('should return undefined when command variant does not exist', () => {
    expect(buildPmCommand('npm', 'install', 'typescript', 'unknown' as never)).toBeUndefined();
  });
});

describe('edge cases', () => {
  it('should handle empty array arguments', () => {
    expect(buildPmCommand('npm', 'install', [])).toBe('npm install');
  });

  it('should handle empty string arguments', () => {
    expect(buildPmCommand('npm', 'install', '')).toBe('npm install');
  });

  it('should handle scoped packages', () => {
    expect(buildPmCommand('pnpm', 'install', '@types/node')).toBe('pnpm add @types/node');
  });
});
