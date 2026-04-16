import { describe, expect, it } from 'vitest';
import {
  IS_ALPHA_REGEX,
  IS_ALPHA_UNICODE_REGEX,
  LOWERCASE_ALPHA_REGEX,
  STARTS_WITH_UPPERCASE_REGEX,
  UPPERCASE_ALPHA_REGEX,
} from '../src';

describe('IS_ALPHA_REGEX', () => {
  it('should match uppercase letters', () => {
    expect(IS_ALPHA_REGEX.test('HELLO')).toBe(true);
  });

  it('should match lowercase letters', () => {
    expect(IS_ALPHA_REGEX.test('world')).toBe(true);
  });

  it('should match mixed case letters', () => {
    expect(IS_ALPHA_REGEX.test('HelloWorld')).toBe(true);
  });

  it('should not match strings with numbers', () => {
    expect(IS_ALPHA_REGEX.test('Hello123')).toBe(false);
    expect(IS_ALPHA_REGEX.test('123')).toBe(false);
  });

  it('should not match strings with symbols', () => {
    expect(IS_ALPHA_REGEX.test('hello!')).toBe(false);
    expect(IS_ALPHA_REGEX.test('@test')).toBe(false);
  });

  it('should not match strings with whitespace', () => {
    expect(IS_ALPHA_REGEX.test('hello world')).toBe(false);
  });

  it('should not match empty string', () => {
    expect(IS_ALPHA_REGEX.test('')).toBe(false);
  });
});

describe('IS_ALPHA_UNICODE_REGEX', () => {
  it('should match ASCII letters', () => {
    expect(IS_ALPHA_UNICODE_REGEX.test('Hello')).toBe(true);
  });

  it('should match Cyrillic letters', () => {
    expect(IS_ALPHA_UNICODE_REGEX.test('Привет')).toBe(true);
  });

  it('should match Arabic letters', () => {
    expect(IS_ALPHA_UNICODE_REGEX.test('مرحبا')).toBe(true);
  });

  it('should match Chinese characters', () => {
    expect(IS_ALPHA_UNICODE_REGEX.test('你好')).toBe(true);
  });

  it('should match accented Latin characters', () => {
    expect(IS_ALPHA_UNICODE_REGEX.test('café')).toBe(true);
  });

  it('should not match numbers', () => {
    expect(IS_ALPHA_UNICODE_REGEX.test('123')).toBe(false);
    expect(IS_ALPHA_UNICODE_REGEX.test('Hello123')).toBe(false);
  });

  it('should not match symbols or punctuation', () => {
    expect(IS_ALPHA_UNICODE_REGEX.test('hello!')).toBe(false);
  });

  it('should not match whitespace', () => {
    expect(IS_ALPHA_UNICODE_REGEX.test('hello world')).toBe(false);
  });

  it('should not match empty string', () => {
    expect(IS_ALPHA_UNICODE_REGEX.test('')).toBe(false);
  });
});

describe('LOWERCASE_ALPHA_REGEX', () => {
  describe('valid cases', () => {
    it('matches lowercase alphabetic strings', () => {
      expect(LOWERCASE_ALPHA_REGEX.test('hello')).toBe(true);
      expect(LOWERCASE_ALPHA_REGEX.test('abc')).toBe(true);
    });

    it('matches single character', () => {
      expect(LOWERCASE_ALPHA_REGEX.test('a')).toBe(true);
    });

    it('matches long strings', () => {
      expect(LOWERCASE_ALPHA_REGEX.test('thisisaverylonglowercasestring')).toBe(true);
    });
  });

  describe('invalid cases', () => {
    it('rejects uppercase letters', () => {
      expect(LOWERCASE_ALPHA_REGEX.test('Hello')).toBe(false);
      expect(LOWERCASE_ALPHA_REGEX.test('ABC')).toBe(false);
    });

    it('rejects alphanumeric strings', () => {
      expect(LOWERCASE_ALPHA_REGEX.test('abc123')).toBe(false);
    });

    it('rejects whitespace', () => {
      expect(LOWERCASE_ALPHA_REGEX.test('hello world')).toBe(false);
      expect(LOWERCASE_ALPHA_REGEX.test('hello\tworld')).toBe(false);
    });

    it('rejects special characters', () => {
      expect(LOWERCASE_ALPHA_REGEX.test('hello!')).toBe(false);
      expect(LOWERCASE_ALPHA_REGEX.test('hello_world')).toBe(false);
    });

    it('rejects empty string', () => {
      expect(LOWERCASE_ALPHA_REGEX.test('')).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('rejects numbers only', () => {
      expect(LOWERCASE_ALPHA_REGEX.test('123')).toBe(false);
    });

    it('rejects mixed casing', () => {
      expect(LOWERCASE_ALPHA_REGEX.test('helloWorld')).toBe(false);
    });
  });
});

describe('UPPERCASE_ALPHA_REGEX', () => {
  describe('valid cases', () => {
    it('matches uppercase strings', () => {
      expect(UPPERCASE_ALPHA_REGEX.test('HELLO')).toBe(true);
      expect(UPPERCASE_ALPHA_REGEX.test('ABC')).toBe(true);
    });

    it('matches single character', () => {
      expect(UPPERCASE_ALPHA_REGEX.test('A')).toBe(true);
    });

    it('matches long strings', () => {
      expect(UPPERCASE_ALPHA_REGEX.test('THISISALONGUPPERCASESTRING')).toBe(true);
    });
  });

  describe('invalid cases', () => {
    it('rejects lowercase letters', () => {
      expect(UPPERCASE_ALPHA_REGEX.test('hello')).toBe(false);
    });

    it('rejects mixed case', () => {
      expect(UPPERCASE_ALPHA_REGEX.test('Hello')).toBe(false);
    });

    it('rejects alphanumeric', () => {
      expect(UPPERCASE_ALPHA_REGEX.test('HELLO123')).toBe(false);
    });

    it('rejects whitespace', () => {
      expect(UPPERCASE_ALPHA_REGEX.test('HELLO WORLD')).toBe(false);
    });

    it('rejects special characters', () => {
      expect(UPPERCASE_ALPHA_REGEX.test('HELLO!')).toBe(false);
    });

    it('rejects empty string', () => {
      expect(UPPERCASE_ALPHA_REGEX.test('')).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('rejects numbers only', () => {
      expect(UPPERCASE_ALPHA_REGEX.test('123')).toBe(false);
    });
  });
});

describe('STARTS_WITH_UPPERCASE_REGEX', () => {
  describe('valid cases', () => {
    it('matches strings starting with uppercase', () => {
      expect(STARTS_WITH_UPPERCASE_REGEX.test('Hello')).toBe(true);
      expect(STARTS_WITH_UPPERCASE_REGEX.test('World123')).toBe(true);
    });

    it('matches single uppercase character', () => {
      expect(STARTS_WITH_UPPERCASE_REGEX.test('A')).toBe(true);
    });
  });

  describe('invalid cases', () => {
    it('rejects lowercase start', () => {
      expect(STARTS_WITH_UPPERCASE_REGEX.test('hello')).toBe(false);
    });

    it('rejects numeric start', () => {
      expect(STARTS_WITH_UPPERCASE_REGEX.test('1Hello')).toBe(false);
    });

    it('rejects special character start', () => {
      expect(STARTS_WITH_UPPERCASE_REGEX.test('@Hello')).toBe(false);
    });

    it('rejects empty string', () => {
      expect(STARTS_WITH_UPPERCASE_REGEX.test('')).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('allows any characters after first uppercase', () => {
      expect(STARTS_WITH_UPPERCASE_REGEX.test('A!@#')).toBe(true);
    });
  });
});
