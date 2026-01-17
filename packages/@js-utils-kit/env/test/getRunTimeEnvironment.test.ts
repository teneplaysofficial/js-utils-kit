import { expect, it } from 'vitest';
import { getRunTimeEnvironment } from '../src';
import { Environment } from '@js-utils-kit/types';

it('returns Environment.UNKNOWN for unrecognized value', () => {
  process.env.NODE_ENV = 'staging';
  expect(getRunTimeEnvironment()).toBe(Environment.UNKNOWN);
});

it('returns Environment.UNKNOWN when NODE_ENV is undefined', () => {
  delete process.env.NODE_ENV;
  expect(getRunTimeEnvironment()).toBe(Environment.UNKNOWN);
});
