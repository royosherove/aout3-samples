const { PasswordVerifier } = require('./00-password-verifier00');

const { stringMatching } = expect;

describe('higher order function mocks', () => {
  test('makeVerifier, given logger and input, calls the logger ', () => {
    const mockLog = { info: jest.fn() };
    const verifier = new PasswordVerifier([], mockLog);
    verifier.verify('any input');

    expect(mockLog.info)
      .toHaveBeenCalledWith(stringMatching(/PASS/));
  });
});
