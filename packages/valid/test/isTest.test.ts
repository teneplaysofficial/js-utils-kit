import { afterEach, expect, it } from 'vitest';
import { isTest } from '../src/isTest';
import { Environment } from '@js-utils-kit/types';

const originalEnv = process.env.NODE_ENV;

afterEach(() => {
  process.env.NODE_ENV = originalEnv;
});

it('returns true when NODE_ENV is "test"', () => {
  process.env.NODE_ENV = Environment.TEST;
  expect(isTest()).toBe(true);
});

it('returns false when NODE_ENV is not "test"', () => {
  process.env.NODE_ENV = Environment.PROD;
  expect(isTest()).toBe(false);
});
