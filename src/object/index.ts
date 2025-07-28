export * from './merge';
export * from './validate';

import { mergeObj } from './merge';
import { isObject, isEmptyObject, isNonEmptyObject } from './validate';

export default {
  mergeObj,
  isObject,
  isEmptyObject,
  isNonEmptyObject,
};
