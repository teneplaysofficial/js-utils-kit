import { describe, expect, INVALID_PACKAGE_NAMES, it, VALID_PACKAGE_NAMES } from '@repo/test-utils';
import { isValidPackageName } from '../src';

describe('isValidNpmPackageName', () => {
  it.each(VALID_PACKAGE_NAMES)('should return true for valid package name "%s"', (name) => {
    expect(isValidPackageName(name)).toBe(true);
  });

  it.each(INVALID_PACKAGE_NAMES)('should return false for invalid package name "%s"', (name) => {
    expect(isValidPackageName(name)).toBe(false);
  });
});
