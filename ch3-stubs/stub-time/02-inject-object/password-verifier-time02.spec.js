const { SUNDAY, MONDAY } = require('./password-verifier-time02');
// class constructor demo
const { PasswordVerifier } = require('./password-verifier-time02');

function FakeTimeProvider (fakeDay) {
  this.getDay = function () {
    return fakeDay;
  };
}
const makeVerifier = (rules, timeProvider) => {
  return new PasswordVerifier(rules, timeProvider);
};

describe('verifier', () => {
  test('on weekends, throws exceptions, ctor function', () => {
    const verifier = makeVerifier([], new FakeTimeProvider(SUNDAY));

    expect(() => verifier.verify('anything'))
      .toThrow("It's the weekend!");
  });

  test('on weekdays, with no rules, always passes', () => {
    const verifier = makeVerifier([], new FakeTimeProvider(MONDAY));

    const result = verifier.verify('anything');
    expect(result.length).toBe(0);
  });
});
