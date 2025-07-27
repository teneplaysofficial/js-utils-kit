import {
  containsWhitespace,
  endsWithPunctuation,
  isAlphabetic,
  isCamelCase,
  isEmail,
  isKebabCase,
  isLowerCase,
  isNonEmptyString,
  isNumericString,
  isPascalCase,
  isSnakeCase,
  isString,
  isUpperCase,
  isURL,
  startsWithUppercase,
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

  describe('startsWithUppercase', () => {
    it('returns true if string starts with uppercase', () => {
      expect(startsWithUppercase('Hello')).toBe(true);
    });

    it('returns false if string starts with lowercase or digit', () => {
      expect(startsWithUppercase('hello')).toBe(false);
      expect(startsWithUppercase('1Hello')).toBe(false);
    });
  });

  describe('endsWithPunctuation', () => {
    it('returns true if string ends with punctuation', () => {
      expect(endsWithPunctuation('Hello.')).toBe(true);
      expect(endsWithPunctuation('What?')).toBe(true);
      expect(endsWithPunctuation('Wow!')).toBe(true);
    });

    it('returns false if string does not end with punctuation', () => {
      expect(endsWithPunctuation('Hello')).toBe(false);
      expect(endsWithPunctuation('Hi there')).toBe(false);
    });
  });

  describe('containsWhitespace', () => {
    it('returns true if string contains any whitespace', () => {
      expect(containsWhitespace('hello world')).toBe(true);
      expect(containsWhitespace('\tTabbed')).toBe(true);
    });

    it('returns false for strings with no whitespace', () => {
      expect(containsWhitespace('hello')).toBe(false);
    });
  });

  describe('isCamelCase', () => {
    it('returns true for camelCase strings', () => {
      expect(isCamelCase('myVariable')).toBe(true);
      expect(isCamelCase('test123Name')).toBe(true);
    });

    it('returns false for non-camelCase', () => {
      expect(isCamelCase('MyVariable')).toBe(false);
      expect(isCamelCase('my_variable')).toBe(false);
      expect(isCamelCase('my-variable')).toBe(false);
    });
  });

  describe('isPascalCase', () => {
    it('returns true for PascalCase strings', () => {
      expect(isPascalCase('MyVariable')).toBe(true);
      expect(isPascalCase('Test123Name')).toBe(true);
    });

    it('returns false for non-PascalCase', () => {
      expect(isPascalCase('myVariable')).toBe(false);
      expect(isPascalCase('my_variable')).toBe(false);
      expect(isPascalCase('my-variable')).toBe(false);
    });
  });

  describe('isKebabCase', () => {
    it('returns true for kebab-case strings', () => {
      expect(isKebabCase('my-variable')).toBe(true);
      expect(isKebabCase('one-two-three')).toBe(true);
    });

    it('returns false for other cases', () => {
      expect(isKebabCase('MyVariable')).toBe(false);
      expect(isKebabCase('my_variable')).toBe(false);
      expect(isKebabCase('myVariable')).toBe(false);
      expect(isKebabCase('my--variable')).toBe(false);
    });
  });

  describe('isSnakeCase', () => {
    it('returns true for snake_case strings', () => {
      expect(isSnakeCase('my_variable')).toBe(true);
      expect(isSnakeCase('one_two_three')).toBe(true);
    });

    it('returns false for other cases', () => {
      expect(isSnakeCase('MyVariable')).toBe(false);
      expect(isSnakeCase('my-variable')).toBe(false);
      expect(isSnakeCase('myVariable')).toBe(false);
      expect(isSnakeCase('my__variable')).toBe(false);
    });
  });

  describe('isUpperCase', () => {
    it('returns true for all-uppercase strings', () => {
      expect(isUpperCase('HELLO')).toBe(true);
    });

    it('returns false if any character is lowercase', () => {
      expect(isUpperCase('Hello')).toBe(false);
      expect(isUpperCase('hello')).toBe(false);
    });
  });

  describe('isLowerCase', () => {
    it('returns true for all-lowercase strings', () => {
      expect(isLowerCase('hello')).toBe(true);
    });

    it('returns false if any character is uppercase', () => {
      expect(isLowerCase('Hello')).toBe(false);
      expect(isLowerCase('HELLO')).toBe(false);
    });
  });
});
