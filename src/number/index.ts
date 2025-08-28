export * from './clamp';
export * from './parity';
export * from './random';
export * from './time';

import { clamp } from './clamp';
import { isEven, isOdd } from './parity';
import { randomInt, randomFloat } from './random';
import { getMilliseconds } from './time';

export default {
  clamp,
  isEven,
  isOdd,
  randomInt,
  randomFloat,
  getMilliseconds,
};
