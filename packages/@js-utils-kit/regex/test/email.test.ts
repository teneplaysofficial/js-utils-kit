import { describe, expect, it } from 'vitest';
import { EMAIL_REGEX, EMAIL_UNICODE_REGEX } from '../src';

describe('EMAIL_REGEX', () => {
  describe('valid emails', () => {
    it('should match standard email', () => {
      expect(EMAIL_REGEX.test('user@example.com')).toBe(true);
    });

    it('should match email with subdomain', () => {
      expect(EMAIL_REGEX.test('user@mail.example.com')).toBe(true);
    });

    it('should match email with plus', () => {
      expect(EMAIL_REGEX.test('user+tag@example.com')).toBe(true);
    });

    it('should match email with underscore and hyphen', () => {
      expect(EMAIL_REGEX.test('user_name-123@example.co.in')).toBe(true);
    });
  });

  describe('invalid emails', () => {
    it('should reject leading dot', () => {
      expect(EMAIL_REGEX.test('.user@example.com')).toBe(false);
    });

    it('should reject consecutive dots', () => {
      expect(EMAIL_REGEX.test('user..name@example.com')).toBe(false);
    });

    it('should reject missing @', () => {
      expect(EMAIL_REGEX.test('userexample.com')).toBe(false);
    });

    it('should reject invalid domain', () => {
      expect(EMAIL_REGEX.test('user@.com')).toBe(false);
    });

    it('should reject short TLD', () => {
      expect(EMAIL_REGEX.test('user@example.c')).toBe(false);
    });

    it('should reject trailing dot in domain', () => {
      expect(EMAIL_REGEX.test('user@example.com.')).toBe(false);
    });

    it('should reject empty string', () => {
      expect(EMAIL_REGEX.test('')).toBe(false);
    });
  });
});

describe('EMAIL_UNICODE_REGEX', () => {
  it('accepts valid unicode emails', () => {
    expect(EMAIL_UNICODE_REGEX.test('用户@例子.公司')).toBe(true);
    expect(EMAIL_UNICODE_REGEX.test('δοκιμή@παράδειγμα.δοκιμή')).toBe(true);
    expect(EMAIL_UNICODE_REGEX.test('москва@пример.рф')).toBe(true);
  });

  it('accepts standard emails', () => {
    expect(EMAIL_UNICODE_REGEX.test('user@example.com')).toBe(true);
    expect(EMAIL_UNICODE_REGEX.test('first.last@test.co')).toBe(true);
    expect(EMAIL_UNICODE_REGEX.test('name+tag@domain.org')).toBe(true);
  });

  it('allows emails without strict domain structure', () => {
    expect(EMAIL_UNICODE_REGEX.test('user@example')).toBe(true); // no TLD enforcement
    expect(EMAIL_UNICODE_REGEX.test('a@b')).toBe(true);
  });

  it('rejects whitespace', () => {
    expect(EMAIL_UNICODE_REGEX.test('user name@example.com')).toBe(false);
    expect(EMAIL_UNICODE_REGEX.test('user@exa mple.com')).toBe(false);
    expect(EMAIL_UNICODE_REGEX.test(' user@example.com')).toBe(false);
    expect(EMAIL_UNICODE_REGEX.test('user@example.com ')).toBe(false);
  });

  it('rejects multiple @ symbols', () => {
    expect(EMAIL_UNICODE_REGEX.test('a@b@c.com')).toBe(false);
    expect(EMAIL_UNICODE_REGEX.test('@@example.com')).toBe(false);
  });

  it('rejects double quotes in local part', () => {
    expect(EMAIL_UNICODE_REGEX.test('user"test@example.com')).toBe(false);
  });

  it('enforces local part length (1–64)', () => {
    const validLocal = 'a'.repeat(64);
    expect(EMAIL_UNICODE_REGEX.test(`${validLocal}@example.com`)).toBe(true);

    const tooLongLocal = 'a'.repeat(65);
    expect(EMAIL_UNICODE_REGEX.test(`${tooLongLocal}@example.com`)).toBe(false);
  });

  it('enforces domain part length (1–255)', () => {
    const validDomain = 'a'.repeat(255);
    expect(EMAIL_UNICODE_REGEX.test(`user@${validDomain}`)).toBe(true);

    const tooLongDomain = 'a'.repeat(256);
    expect(EMAIL_UNICODE_REGEX.test(`user@${tooLongDomain}`)).toBe(false);
  });

  it('rejects missing parts', () => {
    expect(EMAIL_UNICODE_REGEX.test('@example.com')).toBe(false);
    expect(EMAIL_UNICODE_REGEX.test('user@')).toBe(false);
    expect(EMAIL_UNICODE_REGEX.test('@')).toBe(false);
    expect(EMAIL_UNICODE_REGEX.test('')).toBe(false);
  });
});
