import { all, digits, lowercase, uppercase } from '../../src/char/ascii';

describe('ASCII', () => {
  test('lowercase returns 26 lowercase letters', () => {
    const result = lowercase();
    expect(result).toHaveLength(26);
    expect(result[0]).toBe('a');
    expect(result[25]).toBe('z');
  });

  test('uppercase returns 26 uppercase letters', () => {
    const result = uppercase();
    expect(result).toHaveLength(26);
    expect(result[0]).toBe('A');
    expect(result[25]).toBe('Z');
  });

  test('digits returns 10 numeric characters', () => {
    const result = digits();
    expect(result).toHaveLength(10);
    expect(result[0]).toBe('0');
    expect(result[9]).toBe('9');
  });

  test('all returns combined lowercase, uppercase, and digits', () => {
    const result = all();
    expect(result).toHaveLength(62);
    expect(result).toContain('a');
    expect(result).toContain('Z');
    expect(result).toContain('5');
  });
});
