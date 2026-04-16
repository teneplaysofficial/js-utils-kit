import { describe, expect, it } from 'vitest';
import { isKebabCase } from '../src';

describe('valid cases', () => {
  it('accepts standard kebab-case', () => {
    expect(isKebabCase('hello-world')).toBe(true);
    expect(isKebabCase('my-variable-name')).toBe(true);
  });

  it('accepts numbers', () => {
    expect(isKebabCase('hello-world-123')).toBe(true);
    expect(isKebabCase('a1-b2-c3')).toBe(true);
  });

  it('accepts single word', () => {
    expect(isKebabCase('hello')).toBe(true);
  });
});

describe('invalid cases', () => {
  it('rejects uppercase', () => {
    expect(isKebabCase('Hello-world')).toBe(false);
  });

  it('rejects snake_case', () => {
    expect(isKebabCase('hello_world')).toBe(false);
  });

  it('rejects camelCase', () => {
    expect(isKebabCase('helloWorld')).toBe(false);
  });

  it('rejects leading hyphen', () => {
    expect(isKebabCase('-hello-world')).toBe(false);
  });

  it('rejects trailing hyphen', () => {
    expect(isKebabCase('hello-world-')).toBe(false);
  });

  it('rejects consecutive hyphens', () => {
    expect(isKebabCase('hello--world')).toBe(false);
  });

  it('rejects spaces', () => {
    expect(isKebabCase('hello world')).toBe(false);
  });

  it('rejects special characters', () => {
    expect(isKebabCase('hello-world!')).toBe(false);
  });

  it('rejects empty string', () => {
    expect(isKebabCase('')).toBe(false);
  });
});
