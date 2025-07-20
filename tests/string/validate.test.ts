import {
  isAlphabetic,
  isEmail,
  isNonEmptyString,
  isNumericString,
  isString,
  isURL,
} from '../../src/string/validate';

describe('String Validation Tests', () => {
  describe('isString()', () => {
    it('validates strings correctly', () => {
      expect(isString('text')).toBe(true);
      expect(isString(123)).toBe(false);
    });
  });

  describe('isNonEmptyString()', () => {
    it('checks non-empty strings with and without trim', () => {
      expect(isNonEmptyString('hello')).toBe(true);
      expect(isNonEmptyString('   ')).toBe(false);
      expect(isNonEmptyString('   ', false)).toBe(true);
    });

    it('returns false for non-strings', () => {
      expect(isNonEmptyString(null)).toBe(false);
      expect(isNonEmptyString([])).toBe(false);
    });
  });

  describe('isURL()', () => {
    it('validates URLs correctly', () => {
      expect(isURL('https://example.com')).toBe(true);
      expect(isURL('/relative')).toBe(false);
    });
  });

  describe('isEmail()', () => {
    it('validates emails correctly', () => {
      expect(isEmail('user@example.com')).toBe(true);
      expect(isEmail('bad@email')).toBe(false);
    });
  });

  describe('isAlphabetic()', () => {
    it('validates alphabetic strings', () => {
      expect(isAlphabetic('Test')).toBe(true);
      expect(isAlphabetic('123')).toBe(false);
    });
  });

  describe('isNumericString()', () => {
    it('validates numeric strings including decimals and scientific notation', () => {
      expect(isNumericString('42')).toBe(true);
      expect(isNumericString('3.14')).toBe(true);
      expect(isNumericString('1e3')).toBe(true);
      expect(isNumericString('abc')).toBe(false);
    });
  });
});
