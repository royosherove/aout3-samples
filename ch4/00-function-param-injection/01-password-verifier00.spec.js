const { verifyPassword2 } = require('./00-password-verifier00');

describe('password verifier with logger', () => {
  describe('when all rules pass', () => {
    it('calls the logger with PASSED', () => {
      let written = '';
      const mockLog = {
        info: (text) => {
          written = text;
        }
      };

      verifyPassword2('anything', [], mockLog);

      expect(written).toMatch(/PASSED/);
    });
  });
});
