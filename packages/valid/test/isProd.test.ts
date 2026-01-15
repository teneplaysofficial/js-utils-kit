import { afterEach, expect, it } from 'vitest';
import { isProd } from '../src';
import { Environment } from '@js-utils-kit/types';

const originalEnv = process.env.NODE_ENV;

afterEach(() => {
  process.env.NODE_ENV = originalEnv;
});

it('returns true when NODE_ENV is "production"', () => {
  process.env.NODE_ENV = Environment.PROD;
  expect(isProd()).toBe(true);
});

it('returns false when NODE_ENV is not "production"', () => {
  process.env.NODE_ENV = Environment.DEV;
  expect(isProd()).toBe(false);
});
