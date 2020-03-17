const { verifyPassword2 } = require('./00-password-verifier00');
const { stringMatching} = expect;

describe('password verifier with logger', () => {
  describe('using jest.fn', () => {
    it('calls the logger with PASS', () => {
      const mockLog = { info: jest.fn() };

      verifyPassword2('anything', [], mockLog);

      expect(mockLog.info)
        .toHaveBeenCalledWith(stringMatching(/PASS/));
    });
  });
});
