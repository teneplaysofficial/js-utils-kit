import { mergeObj } from '../../src/object/merge';

describe('mergeObj', () => {
  it('should deeply merge plain objects', () => {
    const a = { user: 'Admin', config: { dark: true } };
    const b = { config: { theme: 'blue' } };

    const result = mergeObj(false, a, b);
    expect(result).toEqual({
      user: 'Admin',
      config: { dark: true, theme: 'blue' },
    });
  });

  it('should replace arrays when appendArray is false (default)', () => {
    const a = { roles: ['read'] };
    const b = { roles: ['write'] };

    const result = mergeObj(false, a, b);
    expect(result).toEqual({ roles: ['write'] });
  });

  it('should append arrays when appendArray is true', () => {
    const a = { roles: ['read'] };
    const b = { roles: ['write'] };

    const result = mergeObj(true, a, b);
    expect(result).toEqual({ roles: ['read', 'write'] });
  });

  it('should override primitive values', () => {
    const a = { count: 1, name: 'A' };
    const b = { count: 2 };

    const result = mergeObj(false, a, b);
    expect(result).toEqual({ count: 2, name: 'A' });
  });

  it('should return an empty object when no sources are provided', () => {
    const result = mergeObj();
    expect(result).toEqual({});
  });

  it('should return the same object if only one is provided', () => {
    const a = { x: 1 };
    const result = mergeObj(false, a);
    expect(result).toEqual({ x: 1 });
  });

  it('should handle nested arrays and objects together', () => {
    const a = {
      data: {
        items: [1, 2],
        meta: { created: true },
      },
    };
    const b = {
      data: {
        items: [3, 4],
        meta: { updated: true },
      },
    };

    const result = mergeObj(true, a, b);
    expect(result).toEqual({
      data: {
        items: [1, 2, 3, 4],
        meta: { created: true, updated: true },
      },
    });
  });

  it('should not mutate original objects', () => {
    const a = { val: 1 };
    const b = { val: 2 };

    const result = mergeObj(false, a, b);
    expect(a).toEqual({ val: 1 });
    expect(b).toEqual({ val: 2 });
    expect(result).toEqual({ val: 2 });
  });
});
