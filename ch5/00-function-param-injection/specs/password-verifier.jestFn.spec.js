const { verifyPassword2 } = require('../password-verifier');
const { stringMatching } = expect;

describe('password verifier', () => {
  describe('given logger and passing scenario', () => {
    it('calls the logger with PASS', () => {
      const mockLog = { info: jest.fn() };

      verifyPassword2('anything', [], mockLog);

      expect(mockLog.info)
        .toHaveBeenCalledWith(stringMatching(/PASS/));
    });
  });
});
