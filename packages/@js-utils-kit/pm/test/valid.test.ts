import { NODE_BUILTIN_MODULES } from '@js-utils-kit/constants';
import { describe, expect, INVALID_PACKAGE_NAMES, it, VALID_PACKAGE_NAMES } from '@repo/test-utils';
import { isValidPackageName } from '../src';

describe('isValidPackageName', () => {
  it.each(VALID_PACKAGE_NAMES)('should return true for valid package name "%s"', (name) => {
    expect(isValidPackageName(name)).toBe(true);
  });

  it.each(INVALID_PACKAGE_NAMES.concat(NODE_BUILTIN_MODULES))(
    'should return false for invalid package name "%s"',
    (name) => {
      expect(isValidPackageName(name)).toBe(false);
    },
  );

  it.each([
    [{}],
    [[]],
    [null],
    [undefined],
    [true],
    [false],
    [Boolean],
    [Object],
    [Array],
    [Set],
    [Map],
  ])('should return false for non-string input %s', (name) => {
    expect(isValidPackageName(name as never)).toBe(false);
  });
});
