const {createSpyFromClass} = require('jasmine-auto-spies');
const { verifyPassword2 } = require('../password-verifier');
const ComplicatedLogger = require('../complicated-logger-class');

describe('password verifier', () => {
  describe('given logger and passing scenario', () => {
    it('calls the logger with PASS', () => {
      const mockLog = createSpyFromClass(ComplicatedLogger);

      verifyPassword2('anything', [], mockLog);

      expect(mockLog.info).toHaveBeenCalled()
      expect(mockLog.debug).toHaveBeenCalled()
    });
  });
});
