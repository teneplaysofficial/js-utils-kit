import { expect, it } from 'vitest';
import { isEmail } from '../src';

it('validates correct emails', () => {
  expect(isEmail('user@example.com')).toBe(true);
  expect(isEmail('first.last@college.university.in')).toBe(true);
  expect(isEmail('hr.department@company.co.uk')).toBe(true);
  expect(isEmail('name+tag@example.com')).toBe(true);
});

it('rejects incorrect emails', () => {
  expect(isEmail('bad@email')).toBe(false);
  expect(isEmail('plainaddress')).toBe(false);
  expect(isEmail('@no-local-part.com')).toBe(false);
  expect(isEmail('user@.com')).toBe(false);
  expect(isEmail('user@com')).toBe(false);
  expect(isEmail('user@domain..com')).toBe(false);
});

it('enforces total length limit (254)', () => {
  const base = 'a@b.com';
  const valid = base + 'a'.repeat(254 - base.length);

  expect(valid.length).toBe(254);
  expect(isEmail(valid)).toBe(true);

  const tooLong = valid + 'a';

  expect(tooLong.length).toBe(255);
  expect(isEmail(tooLong)).toBe(false);
});

it('uses custom regex when provided', () => {
  const ONLY_EXAMPLE = /^[^@]+@example\.com$/;

  expect(isEmail('user@example.com', ONLY_EXAMPLE)).toBe(true);
  expect(isEmail('user@gmail.com', ONLY_EXAMPLE)).toBe(false);
});

it('can override default behavior via custom regex', () => {
  const ALLOW_ANY = /^.*$/;

  expect(isEmail('not-an-email', ALLOW_ANY)).toBe(true);
});

it('throws TypeError if input is not a string', () => {
  expect(() => isEmail(null as never)).toThrow(TypeError);
  expect(() => isEmail(undefined as never)).toThrow(TypeError);
  expect(() => isEmail(123 as never)).toThrow(TypeError);
  expect(() => isEmail({} as never)).toThrow(TypeError);
});
