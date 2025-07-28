export * from './case';
export * from './format';
export * from './trim';
export * from './validate';

import { capitalize } from './case';
import { padLeft, padRight, truncate, repeatString } from './format';
import { trim } from './trim';
import {
  isString,
  isNonEmptyString,
  isURL,
  isEmail,
  isAlphabetic,
  isNumericString,
  startsWithUppercase,
  endsWithPunctuation,
  containsWhitespace,
  isCamelCase,
  isPascalCase,
  isKebabCase,
  isSnakeCase,
  isUpperCase,
  isLowerCase,
} from './validate';

export default {
  capitalize,
  padLeft,
  padRight,
  truncate,
  repeatString,
  trim,
  isString,
  isNonEmptyString,
  isURL,
  isEmail,
  isAlphabetic,
  isNumericString,
  startsWithUppercase,
  endsWithPunctuation,
  containsWhitespace,
  isCamelCase,
  isPascalCase,
  isKebabCase,
  isSnakeCase,
  isUpperCase,
  isLowerCase,
};
