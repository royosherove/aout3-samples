const { PasswordVerifier } = require('./00-password-verifier00');

const { makeVerifier } = require('./00-password-verifier00');
const { stringMatching } = expect;

describe('function constructor injection', () => {
  describe('password verifier', () => {
    test('given logger and passing scenario, calls logger with PASSED', () => {
      const mockLog = { info: jest.fn() };
      const verifier = new PasswordVerifier([], mockLog);
      verifier.verify('any input');

      expect(mockLog.info)
        .toHaveBeenCalledWith(stringMatching(/PASS/));
    });
  });
});
