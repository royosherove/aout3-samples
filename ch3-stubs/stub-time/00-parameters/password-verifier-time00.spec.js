const moment = require('moment');
const { verifyPassword } = require('./password-verifier-time00');
const { verifyPassword2 } = require('./password-verifier-time00');
const { verifyPassword3 } = require('./password-verifier-time00');
const SUNDAY = 0; const SATURDAY = 6; const MONDAY = 2;

describe('verifier', () => {
  const TODAY = moment().day();

  // test is always executed, but might not do anything
  test('on weekends, throws exceptions', () => {
    if ([SATURDAY, SUNDAY].includes(TODAY)) {
      expect(() => verifyPassword('anything', []))
        .toThrowError("It's the weekend!");
    }
  });

  // test is not even executed on week days
  if ([SATURDAY, SUNDAY].includes(TODAY)) {
    test('on a weekend, throws an error', () => {
      expect(() => verifyPassword('anything', []))
        .toThrow("It's the weekend!");
    });
  }
});

describe('verifier2 - dummy object', () => {
  test('on weekends, throws exceptions', () => {
    expect(() => verifyPassword2('anything', [], SUNDAY))
      .toThrowError("It's the weekend!");
  });
});

describe('verifier3 - dummy function', () => {
  test('on weekends, throws exceptions', () => {
    const alwaysSunday = () => SUNDAY;
    expect(() => verifyPassword3('anything', [], alwaysSunday))
      .toThrowError("It's the weekend!");
  });
  test('on week days, works fine', () => {
    const alwaysMonday = () => MONDAY;

    const result = verifyPassword3('anything', [], alwaysMonday);

    expect(result.length).toBe(0);
  });
});
