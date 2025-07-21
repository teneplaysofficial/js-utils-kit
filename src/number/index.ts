export * from './clamp';
export * from './parity';
export * from './random';

import { clamp } from './clamp';
import { isEven, isOdd } from './parity';
import { randomInt, randomFloat } from './random';

export default {
  clamp,
  isEven,
  isOdd,
  randomInt,
  randomFloat,
};
