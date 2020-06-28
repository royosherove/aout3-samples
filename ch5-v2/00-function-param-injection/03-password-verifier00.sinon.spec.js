const sinon = require('sinon');
//sinon.mock: record/replay with strict mocks
// sinon spy: take over existing functions on existing object
// sinon.stub/fake: replace a function (with ability to assert with AAA style)
// sandboxes are good for setup/teardown like behavior for file-level objects
const { verifyPassword2 } = require('./00-password-verifier00');

describe('password verifier', () => {

  const makeFakeLogger = () => ({
    info: sinon.fake()
  })

  describe('given logger and passing scenario', () => {
    it('calls the logger with PASS', () => {
      const fakelogger = makeFakeLogger();

      verifyPassword2('anything', [], fakelogger);

      sinon.assert.calledWith(fakelogger.info, 'PASSED');
    });
  });
});
