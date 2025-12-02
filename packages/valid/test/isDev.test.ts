import { afterEach, expect, it } from 'vitest';
import { isDev } from '../src/isDev';
import { Environment } from '@js-utils-kit/types';

const originalEnv = process.env.NODE_ENV;

afterEach(() => {
  process.env.NODE_ENV = originalEnv;
});

it('returns true when NODE_ENV is "development"', () => {
  process.env.NODE_ENV = Environment.DEV;
  expect(isDev()).toBe(true);
});

it('returns false when NODE_ENV is not "development"', () => {
  process.env.NODE_ENV = Environment.TEST;
  expect(isDev()).toBe(false);
});
