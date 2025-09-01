export * from './case';
export * from './fn';
export * from './format';
export * from './trim';
export * from './validate';

import { capitalize } from './case';
import {
  splitString,
  countChars,
  countWords,
  countSubstring,
  countFrequencies,
  countLines,
  uniqueChars,
  longestWordLength,
  shortestWordLength,
  longestWord,
  shortestWord,
} from './fn';
import { padLeft, padRight, truncate, repeatString, stripSymbols } from './format';
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
  splitString,
  countChars,
  countWords,
  countSubstring,
  countFrequencies,
  countLines,
  uniqueChars,
  longestWordLength,
  shortestWordLength,
  longestWord,
  shortestWord,
  padLeft,
  padRight,
  truncate,
  repeatString,
  stripSymbols,
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
