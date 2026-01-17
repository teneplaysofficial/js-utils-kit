import { expect, it } from 'vitest';
import { NODE_MAJOR_VERSION, NODE_VERSION, RUNTIME_VERSIONS } from '../src';

it('should return node version', () => {
  expect(NODE_VERSION).toBeTypeOf('string');
  expect(NODE_VERSION.length).toBeGreaterThan(0);
  expect(NODE_VERSION.split('.').length).toBeGreaterThanOrEqual(3);
});

it('should return major node version', () => {
  expect(NODE_MAJOR_VERSION).toBeTypeOf('number');
  expect(NODE_MAJOR_VERSION).toBeGreaterThan(0);
  expect(NODE_MAJOR_VERSION).toBe(NODE_VERSION.split('.').map(Number)[0]);
});

it('should expose RUNTIME_VERSIONS as an object', () => {
  expect(RUNTIME_VERSIONS).toBeTypeOf('object');
  expect(RUNTIME_VERSIONS).toHaveProperty('node');
  expect(RUNTIME_VERSIONS).toHaveProperty('v8');
});

it('RUNTIME_VERSIONS.node should match NODE_VERSION', () => {
  expect(RUNTIME_VERSIONS.node).toBe(NODE_VERSION);
});
