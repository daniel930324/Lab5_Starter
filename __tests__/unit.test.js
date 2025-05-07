// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// PHONE NUMBER
describe('isPhoneNumber()', () => {
  test('valid: "(123) 456-7890"', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('valid: "123-456-7890"', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('invalid: missing hyphens "1234567890"', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });
  test('invalid: non‑digit chars "abc-def-ghij"', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
  });
});

// EMAIL
describe('isEmail()', () => {
  test('valid: "user@example.com"', () => {
    expect(isEmail('user@example.com')).toBe(true);
  });
  test('valid: "alice_123@domain.co"', () => {
    expect(isEmail('alice_123@domain.co')).toBe(true);
  });
  test('invalid: missing "@" → "userexample.com"', () => {
    expect(isEmail('userexample.com')).toBe(false);
  });
  test('invalid: bad TLD → "user@com"', () => {
    expect(isEmail('user@com')).toBe(false);
  });
});

// STRONG PASSWORD
describe('isStrongPassword()', () => {
  test('valid: starts with letter, length ≥4 "Abc1"', () => {
    expect(isStrongPassword('Abc1')).toBe(true);
  });
  test('valid: underscore & numbers "Z_password9"', () => {
    expect(isStrongPassword('Z_password9')).toBe(true);
  });
  test('invalid: starts with digit "1abc"', () => {
    expect(isStrongPassword('1abc')).toBe(false);
  });
  test('invalid: too short "Ab"', () => {
    expect(isStrongPassword('Ab')).toBe(false);
  });
});

// DATE
describe('isDate()', () => {
  test('valid: single‑digit month/day "1/1/2020"', () => {
    expect(isDate('1/1/2020')).toBe(true);
  });
  test('valid: two‑digit month/day "12/31/1999"', () => {
    expect(isDate('12/31/1999')).toBe(true);
  });
  test('invalid: wrong separator "01-01-2020"', () => {
    expect(isDate('01-01-2020')).toBe(false);
  });
  test('invalid: two‑digit year "1/1/20"', () => {
    expect(isDate('1/1/20')).toBe(false);
  });
});

// HEX COLOR
describe('isHexColor()', () => {
  test('valid: 3‑digit with "#" "#A3C"', () => {
    expect(isHexColor('#A3C')).toBe(true);
  });
  test('valid: 6‑digit no "#" "123abc"', () => {
    expect(isHexColor('123abc')).toBe(true);
  });
  test('invalid: wrong length "#FF"', () => {
    expect(isHexColor('#FF')).toBe(false);
  });
  test('invalid: non‑hex chars "#GGG"', () => {
    expect(isHexColor('#GGG')).toBe(false);
  });
});

