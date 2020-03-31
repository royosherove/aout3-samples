const sinon = require('sinon');
const { verifyPassword2 } = require('./00-password-verifier00');

describe('password verifier', () => {
  describe('given logger and passing scenario', () => {
    it('calls the logger with PASS', () => {
      const mockLog = { info: sinon.fake() };

      verifyPassword2('anything', [], mockLog);

      sinon.assert.calledWith(mockLog.info, 'PASSED');
    });
  });
});
