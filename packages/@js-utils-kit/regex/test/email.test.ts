import { describe, expect, it } from 'vitest';
import { EMAIL_REGEX } from '../src';

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
