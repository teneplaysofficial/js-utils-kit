import { describe, expect, it } from 'vitest';
import { isCamelCase } from '../src';

describe('valid camelCase', () => {
  it('accepts standard camelCase', () => {
    expect(isCamelCase('myVariable')).toBe(true);
    expect(isCamelCase('helloWorld')).toBe(true);
  });

  it('accepts camelCase with numbers', () => {
    expect(isCamelCase('test123Name')).toBe(true);
    expect(isCamelCase('a1B2c3')).toBe(true);
  });

  it('accepts minimal valid camelCase', () => {
    expect(isCamelCase('aB')).toBe(true);
  });
});

describe('invalid camelCase', () => {
  it('rejects PascalCase', () => {
    expect(isCamelCase('MyVariable')).toBe(false);
    expect(isCamelCase('HelloWorld')).toBe(false);
  });

  it('rejects snake_case', () => {
    expect(isCamelCase('my_variable')).toBe(false);
  });

  it('rejects kebab-case', () => {
    expect(isCamelCase('my-variable')).toBe(false);
  });

  it('rejects uppercase only', () => {
    expect(isCamelCase('ABC')).toBe(false);
  });

  it('rejects lowercase only (no camel transition)', () => {
    expect(isCamelCase('hello')).toBe(false);
  });

  it('rejects strings starting with number', () => {
    expect(isCamelCase('1abcDef')).toBe(false);
  });

  it('rejects special characters', () => {
    expect(isCamelCase('helloWorld!')).toBe(false);
    expect(isCamelCase('hello@World')).toBe(false);
  });

  it('rejects whitespace', () => {
    expect(isCamelCase('hello World')).toBe(false);
    expect(isCamelCase('hello\tWorld')).toBe(false);
  });

  it('rejects empty string', () => {
    expect(isCamelCase('')).toBe(false);
  });
});

describe('edge cases', () => {
  it('rejects single lowercase character', () => {
    expect(isCamelCase('a')).toBe(false);
  });

  it('rejects single uppercase character', () => {
    expect(isCamelCase('A')).toBe(false);
  });

  it('handles long strings', () => {
    expect(isCamelCase('thisIsAVeryLongCamelCaseString123')).toBe(true);
  });
});
