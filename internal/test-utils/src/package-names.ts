export const VALID_PACKAGE_NAMES = [
  // common packages
  'react',
  'react-dom',
  'lodash',
  'vite',
  'next',
  'express',

  // unscoped
  'pkgname',
  'pkg-name',
  'pkg_name',
  'pkg.name',
  'my-package',
  'my_package',
  'my.package',

  // numeric
  'a',
  'a1',
  '1pkg',
  '123',
  'abc123',

  // mixed separators
  'a.b-c_d',
  'pkg-name_test.value',

  // scoped
  '@types/node',
  '@types/react',
  '@my-org/utils',
  '@scope/pkg',
  '@scope/pkg.name',
  '@scope/pkg_name',
  '@scope/pkgname',
  '@scope123/pkg-123',

  // minimal scoped
  '@a/b',
  '@a123/b123',

  // max length boundary
  'a'.repeat(214),
] as const;

export const INVALID_PACKAGE_NAMES = [
  // empty
  '',
  ' ',

  // uppercase
  'React',
  'MyPackage',
  'HELLO',
  '@Scope/pkg',

  // invalid starts
  '.pkg',
  '-pkg',
  '_pkg',
  '~pkg',

  // malformed scopes
  '@',
  '@scope',
  '@scope/',
  '@/pkg',
  '@@scope/pkg',
  '@scope//',
  '@scope//pkg',
  '@scope/pkg/name',

  // invalid paths
  '/pkg',
  '//pkg',
  'pkg/name',

  // malformed dots/hyphens
  '..pkg',
  '--pkg',

  // invalid scoped starts
  '@scope/.pkg',
  '@scope/-pkg',
  '@scope/_pkg',

  // spaces
  'pkg space',
  ' pkg',
  'pkg ',
  ' pkg ',

  // invalid special characters
  'pkg~name',
  '@scope/pkg~name',
  'my*package',
  'my?package',
  'my#package',
  'my\\package',
  'my:package',
  'my%package',
  'pkg!',
  'pkg$',
  'pkg+',
  'pkg,',
  'pkg;',
  'pkg(',
  'pkg)',
  'pkg[',
  'pkg]',
  'pkg{',
  'pkg}',
  'pkg|',
  'pkg"',
  "pkg'",
  'pkg<',
  'pkg>',
  'pkg=',

  // unicode
  'päckage',
  'こんにちは',
  '🚀pkg',

  // length overflow
  'a'.repeat(215),
] as const;
