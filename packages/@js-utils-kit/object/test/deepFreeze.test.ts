/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { it, expect } from 'vitest';
import { deepFreeze } from '../src';

it('returns primitives unchanged', () => {
  expect(deepFreeze(1)).toBe(1);
  expect(deepFreeze('x')).toBe('x');
  expect(deepFreeze(true)).toBe(true);
  expect(deepFreeze(null)).toBe(null);
  expect(deepFreeze(undefined)).toBe(undefined);
});

it('deeply freezes plain objects', () => {
  const obj = deepFreeze({
    a: 1,
    nested: { b: 2 },
  });

  expect(Object.isFrozen(obj)).toBe(true);
  expect(Object.isFrozen(obj.nested)).toBe(true);

  expect(() => {
    obj.a = 2;
  }).toThrow(TypeError);

  expect(() => {
    obj.nested.b = 3;
  }).toThrow(TypeError);
});

it('freezes arrays and nested objects in arrays', () => {
  interface Entry {
    value: number;
  }

  const arr = deepFreeze<readonly (number | Entry)[]>([1, { value: 2 }]);

  const entry = arr[1] as Entry;

  expect(Object.isFrozen(arr)).toBe(true);
  expect(Object.isFrozen(entry)).toBe(true);

  expect(() => {
    (arr as number[]).push(3);
  }).toThrow(TypeError);

  expect(() => {
    entry.value = 10;
  }).toThrow(TypeError);
});

it('handles circular references safely', () => {
  interface Node {
    name: string;
    self?: Node;
  }

  const obj: Node = { name: 'circle' };
  obj.self = obj;

  const frozen = deepFreeze(obj);

  expect(frozen.self).toBe(frozen);
  expect(Object.isFrozen(frozen)).toBe(true);

  expect(() => {
    frozen.name = 'x';
  }).toThrow(TypeError);
});

it('handles shared references', () => {
  interface Shared {
    count: number;
  }

  const shared: Shared = { count: 0 };

  const state = deepFreeze({
    a: shared,
    b: shared,
  });

  expect(state.a).toBe(state.b);
  expect(Object.isFrozen(state.a)).toBe(true);

  expect(() => {
    state.a.count = 1;
  }).toThrow(TypeError);
});

it('freezes non-enumerable properties', () => {
  interface WithHidden {
    hidden: {
      token: string;
    };
  }

  const obj = {} as WithHidden;

  Object.defineProperty(obj, 'hidden', {
    value: { token: '123' },
    enumerable: false,
    writable: true,
  });

  deepFreeze(obj);

  expect(Object.isFrozen(obj.hidden)).toBe(true);

  expect(() => {
    obj.hidden.token = '456';
  }).toThrow(TypeError);
});

it('freezes symbol-keyed properties', () => {
  const secret = Symbol('secret');

  type Obj = {
    [key: symbol]: { enabled: boolean };
  };

  const obj: Obj = {
    [secret]: { enabled: true },
  };

  deepFreeze(obj);

  expect(Object.isFrozen(obj[secret])).toBe(true);

  expect(() => {
    obj[secret].enabled = false;
  }).toThrow(TypeError);
});

it('freezes functions and their properties', () => {
  interface FnWithMeta {
    (): void;
    meta: { active: boolean };
  }

  const fn = (() => {}) as FnWithMeta;
  fn.meta = { active: true };

  deepFreeze(fn);

  expect(Object.isFrozen(fn)).toBe(true);
  expect(Object.isFrozen(fn.meta)).toBe(true);

  expect(() => {
    fn.meta.active = false;
  }).toThrow(TypeError);
});

it('is idempotent (safe to call multiple times)', () => {
  const obj = deepFreeze({
    nested: { value: 1 },
  });

  expect(() => {
    deepFreeze(obj);
  }).not.toThrow();

  expect(Object.isFrozen(obj.nested)).toBe(true);
});

it('handles already frozen objects safely', () => {
  const obj = Object.freeze({
    nested: Object.freeze({ value: 1 }),
  });

  expect(() => deepFreeze(obj)).not.toThrow();
});
