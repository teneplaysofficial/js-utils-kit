import { expect, it } from 'vitest';
import { isEmail } from '../src/isEmail';

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

it('enforces length limits', () => {
  const localPart = 'a'.repeat(64);
  const domainPart = 'b'.repeat(63) + '.com';
  expect(isEmail(`${localPart}@${domainPart}`)).toBe(true);

  const tooLongLocal = 'a'.repeat(65) + '@example.com';
  expect(isEmail(tooLongLocal)).toBe(false);

  const tooLongDomain = 'user@' + 'b'.repeat(256) + '.com';
  expect(isEmail(tooLongDomain)).toBe(false);

  const tooLongEmail = 'a'.repeat(128) + '@' + 'b'.repeat(128) + '.com';
  expect(isEmail(tooLongEmail)).toBe(false);
});

it('throws TypeError if input is not a string', () => {
  expect(() => isEmail(null as never)).toThrow(TypeError);
  expect(() => isEmail(undefined as never)).toThrow(TypeError);
  expect(() => isEmail(123 as never)).toThrow(TypeError);
  expect(() => isEmail({} as never)).toThrow(TypeError);
});
