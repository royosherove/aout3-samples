const { verifyPassword3 } = require('./00-password-verifier00');
const { stringMatching} = expect;

describe('password verifier with logger', () => {
  describe('using currying with no rules', () => {
    it('calls the logger with PASS', () => {
      const mockLog = { info: jest.fn() };
      const injectedVerify = verifyPassword3([], mockLog);

      //this curried function can be passed arround
      //to other places in the code
      //without needing to inject the logger
      injectedVerify('anything');

      expect(mockLog.info)
        .toHaveBeenCalledWith(stringMatching(/PASS/));
    });
  });
});
