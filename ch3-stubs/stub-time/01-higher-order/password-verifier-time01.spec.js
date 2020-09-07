
const { verify } = require('./password-verifier-time01');

const { SATURDAY, SUNDAY, MONDAY } = require('./password-verifier-time01');
// factory method demo
const { makeVerifier } = require('./password-verifier-time01');
// constructor function demo
const { Verifier } = require('./password-verifier-time01');
// class constructor demo
const { PasswordVerifier } = require('./password-verifier-time01');

describe('verifier', () => {
  test('factory method: on weekends, throws exceptions', () => {
    const alwaysSunday = () => SUNDAY;
    const context = {
      verify: makeVerifier([], alwaysSunday)
    };

    expect(() => context.verify('anything'))
      .toThrow("It's the weekend!");
  });

  describe('currying', () => {
    describe('sending only the frist two parameters', () => {
      it('returns a curried function that takes the last one', () => {
        const onlyInputFn = verify([], () => SATURDAY);

        expect(() => onlyInputFn('any input'))
          .toThrow(/weekend/);
      });
    });
  });

  test('constructor function: on weekends, throws exceptions, ctor function', () => {
    const alwaysSunday = () => SUNDAY;
    const verifier = new Verifier([], alwaysSunday);

    expect(() => verifier.verify('anything'))
      .toThrow("It's the weekend!");
  });

  test('class constructor: on weekends, throws exceptions, ctor function', () => {
    const alwaysSunday = () => SUNDAY;
    const verifier = new PasswordVerifier([], alwaysSunday);

    expect(() => verifier.verify('anything'))
      .toThrow("It's the weekend!");
  });

  test('class constructor: on weekdays, with no rules, always passes', () => {
    const alwaysMonday = () => MONDAY;
    const verifier = new PasswordVerifier([], alwaysMonday);

    const result = verifier.verify('anything');
    expect(result.length).toBe(0);
  });

  describe('refactored with constructor', () => {
    const makeVerifier = (rules, dayFn) => {
      return new PasswordVerifier(rules, dayFn);
    };

    test('class constructor: on weekends, throws exceptions, ctor function', () => {
      const alwaysSunday = () => SUNDAY;
      const verifier = makeVerifier([], alwaysSunday);

      expect(() => verifier.verify('anything'))
        .toThrow("It's the weekend!");
    });

    test('class constructor: on weekdays, with no rules, always passes', () => {
      const alwaysMonday = () => MONDAY;
      const verifier = makeVerifier([], alwaysMonday);

      const result = verifier.verify('anything');
      expect(result.length).toBe(0);
    });
  });
});
