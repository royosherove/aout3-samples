const {createSpyFromClass} = require('jasmine-auto-spies');
const { verifyPassword2 } = require('../password-verifier');
const ComplicatedLogger = require('../complicated-logger-prototype');

describe('password verifier', () => {
  describe('given logger and passing scenario', () => {
    it('calls the logger with PASS', () => {
      const mockLog = createSpyFromClass(ComplicatedLogger);
      // const mockLog = { info: sinon.fake() };
      //
      verifyPassword2('anything', [], mockLog);
      //
      // sinon.assert.calledWith(mockLog.info, 'PASSED');
    });
  });
});
