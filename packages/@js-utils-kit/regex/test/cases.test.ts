import { describe, expect, it } from 'vitest';
import { CAMEL_CASE_REGEX, KEBAB_CASE_REGEX, PASCAL_CASE_REGEX, SNAKE_CASE_REGEX } from '../src';

describe('CAMEL_CASE_REGEX', () => {
  describe('valid cases', () => {
    it('matches standard camelCase', () => {
      expect(CAMEL_CASE_REGEX.test('helloWorld')).toBe(true);
      expect(CAMEL_CASE_REGEX.test('myVariableName')).toBe(true);
    });

    it('matches camelCase with numbers', () => {
      expect(CAMEL_CASE_REGEX.test('test123Name')).toBe(true);
      expect(CAMEL_CASE_REGEX.test('a1B2c3')).toBe(true);
    });

    it('matches minimal valid camelCase', () => {
      expect(CAMEL_CASE_REGEX.test('aB')).toBe(true);
    });
  });

  describe('invalid cases', () => {
    it('rejects lowercase only', () => {
      expect(CAMEL_CASE_REGEX.test('hello')).toBe(false);
    });

    it('rejects PascalCase', () => {
      expect(CAMEL_CASE_REGEX.test('HelloWorld')).toBe(false);
    });

    it('rejects snake_case', () => {
      expect(CAMEL_CASE_REGEX.test('hello_world')).toBe(false);
    });

    it('rejects kebab-case', () => {
      expect(CAMEL_CASE_REGEX.test('hello-world')).toBe(false);
    });

    it('rejects strings with spaces', () => {
      expect(CAMEL_CASE_REGEX.test('hello World')).toBe(false);
    });

    it('rejects special characters', () => {
      expect(CAMEL_CASE_REGEX.test('helloWorld!')).toBe(false);
      expect(CAMEL_CASE_REGEX.test('hello@World')).toBe(false);
    });

    it('rejects starting with uppercase', () => {
      expect(CAMEL_CASE_REGEX.test('AhelloWorld')).toBe(false);
    });

    it('rejects starting with number', () => {
      expect(CAMEL_CASE_REGEX.test('1helloWorld')).toBe(false);
    });

    it('rejects empty string', () => {
      expect(CAMEL_CASE_REGEX.test('')).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('rejects single characters', () => {
      expect(CAMEL_CASE_REGEX.test('a')).toBe(false);
      expect(CAMEL_CASE_REGEX.test('A')).toBe(false);
    });

    it('handles long strings', () => {
      expect(CAMEL_CASE_REGEX.test('thisIsAVeryLongCamelCaseString123')).toBe(true);
    });
  });
});

describe('KEBAB_CASE_REGEX', () => {
  describe('valid cases', () => {
    it('matches standard kebab-case', () => {
      expect(KEBAB_CASE_REGEX.test('hello-world')).toBe(true);
      expect(KEBAB_CASE_REGEX.test('my-variable-name')).toBe(true);
    });

    it('matches with numbers', () => {
      expect(KEBAB_CASE_REGEX.test('hello-world-123')).toBe(true);
      expect(KEBAB_CASE_REGEX.test('a1-b2-c3')).toBe(true);
    });

    it('matches single word', () => {
      expect(KEBAB_CASE_REGEX.test('hello')).toBe(true);
    });
  });

  describe('invalid cases', () => {
    it('rejects uppercase', () => {
      expect(KEBAB_CASE_REGEX.test('Hello-world')).toBe(false);
    });

    it('rejects snake_case', () => {
      expect(KEBAB_CASE_REGEX.test('hello_world')).toBe(false);
    });

    it('rejects camelCase', () => {
      expect(KEBAB_CASE_REGEX.test('helloWorld')).toBe(false);
    });

    it('rejects leading hyphen', () => {
      expect(KEBAB_CASE_REGEX.test('-hello-world')).toBe(false);
    });

    it('rejects trailing hyphen', () => {
      expect(KEBAB_CASE_REGEX.test('hello-world-')).toBe(false);
    });

    it('rejects consecutive hyphens', () => {
      expect(KEBAB_CASE_REGEX.test('hello--world')).toBe(false);
    });

    it('rejects spaces', () => {
      expect(KEBAB_CASE_REGEX.test('hello world')).toBe(false);
    });

    it('rejects special characters', () => {
      expect(KEBAB_CASE_REGEX.test('hello-world!')).toBe(false);
    });

    it('rejects empty string', () => {
      expect(KEBAB_CASE_REGEX.test('')).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('handles long strings', () => {
      expect(KEBAB_CASE_REGEX.test('this-is-a-very-long-kebab-case-string-123')).toBe(true);
    });

    it('rejects only hyphen', () => {
      expect(KEBAB_CASE_REGEX.test('-')).toBe(false);
    });
  });
});

describe('PASCAL_CASE_REGEX', () => {
  describe('valid cases', () => {
    it('matches standard PascalCase', () => {
      expect(PASCAL_CASE_REGEX.test('HelloWorld')).toBe(true);
      expect(PASCAL_CASE_REGEX.test('MyVariableName')).toBe(true);
    });

    it('matches with numbers', () => {
      expect(PASCAL_CASE_REGEX.test('Test123Value')).toBe(true);
    });

    it('matches minimal valid PascalCase', () => {
      expect(PASCAL_CASE_REGEX.test('AaaBbb')).toBe(true);
    });
  });

  describe('invalid cases', () => {
    it('rejects single word', () => {
      expect(PASCAL_CASE_REGEX.test('Hello')).toBe(false);
    });

    it('rejects camelCase', () => {
      expect(PASCAL_CASE_REGEX.test('helloWorld')).toBe(false);
    });

    it('rejects uppercase only', () => {
      expect(PASCAL_CASE_REGEX.test('HELLO')).toBe(false);
    });

    it('rejects snake_case', () => {
      expect(PASCAL_CASE_REGEX.test('hello_world')).toBe(false);
    });

    it('rejects kebab-case', () => {
      expect(PASCAL_CASE_REGEX.test('hello-world')).toBe(false);
    });

    it('rejects spaces', () => {
      expect(PASCAL_CASE_REGEX.test('Hello World')).toBe(false);
    });

    it('rejects special characters', () => {
      expect(PASCAL_CASE_REGEX.test('HelloWorld!')).toBe(false);
    });

    it('rejects starting with number', () => {
      expect(PASCAL_CASE_REGEX.test('1HelloWorld')).toBe(false);
    });

    it('rejects empty string', () => {
      expect(PASCAL_CASE_REGEX.test('')).toBe(false);
    });
  });
});

describe('SNAKE_CASE_REGEX', () => {
  describe('valid cases', () => {
    it('matches standard snake_case', () => {
      expect(SNAKE_CASE_REGEX.test('hello_world')).toBe(true);
      expect(SNAKE_CASE_REGEX.test('my_variable_name')).toBe(true);
    });

    it('matches with numbers', () => {
      expect(SNAKE_CASE_REGEX.test('hello_world_123')).toBe(true);
      expect(SNAKE_CASE_REGEX.test('a1_b2_c3')).toBe(true);
    });

    it('matches single word', () => {
      expect(SNAKE_CASE_REGEX.test('hello')).toBe(true);
    });
  });

  describe('invalid cases', () => {
    it('rejects uppercase', () => {
      expect(SNAKE_CASE_REGEX.test('Hello_world')).toBe(false);
    });

    it('rejects kebab-case', () => {
      expect(SNAKE_CASE_REGEX.test('hello-world')).toBe(false);
    });

    it('rejects camelCase', () => {
      expect(SNAKE_CASE_REGEX.test('helloWorld')).toBe(false);
    });

    it('rejects leading underscore', () => {
      expect(SNAKE_CASE_REGEX.test('_hello_world')).toBe(false);
    });

    it('rejects trailing underscore', () => {
      expect(SNAKE_CASE_REGEX.test('hello_world_')).toBe(false);
    });

    it('rejects consecutive underscores', () => {
      expect(SNAKE_CASE_REGEX.test('hello__world')).toBe(false);
    });

    it('rejects spaces', () => {
      expect(SNAKE_CASE_REGEX.test('hello world')).toBe(false);
    });

    it('rejects special characters', () => {
      expect(SNAKE_CASE_REGEX.test('hello_world!')).toBe(false);
    });

    it('rejects empty string', () => {
      expect(SNAKE_CASE_REGEX.test('')).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('handles long strings', () => {
      expect(SNAKE_CASE_REGEX.test('this_is_a_very_long_snake_case_string_123')).toBe(true);
    });

    it('rejects only underscore', () => {
      expect(SNAKE_CASE_REGEX.test('_')).toBe(false);
    });
  });
});
