import { describe, expect, INVALID_PACKAGE_NAMES, it, VALID_PACKAGE_NAMES } from '@repo/test-utils';
import { NPM_PACKAGE_NAME_REGEX } from '../src';

describe('NPM_PACKAGE_NAME_REGEX', () => {
  describe('valid package names', () => {
    it.each(VALID_PACKAGE_NAMES)('should validate "%s"', (name) => {
      expect(NPM_PACKAGE_NAME_REGEX.test(name)).toBe(true);
    });
  });

  describe('invalid package names', () => {
    it.each(INVALID_PACKAGE_NAMES)('should invalidate "%s"', (name) => {
      expect(NPM_PACKAGE_NAME_REGEX.test(name)).toBe(false);
    });
  });
});
