const sinon = require('sinon');
// modular mocks replacement
//
const { verifyPassword2 } = require('../password-verifier');

describe('password verifier', () => {
  describe('given logger and passing scenario', () => {
    it('calls the logger with PASS', () => {
      const mockLog = { info: sinon.fake(), debug: sinon.fake() };

      verifyPassword2('anything', [], mockLog);

      sinon.assert.calledWith(mockLog.info, 'PASSED');
    });
  });
});
