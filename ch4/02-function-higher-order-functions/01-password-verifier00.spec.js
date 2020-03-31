const { makeVerifier } = require('./00-password-verifier00');
const { stringMatching } = expect;

describe('higher order factory functions', () => {

  describe('password verifier', () => {
    test('given logger and passing scenario', () => {
      const mockLog = { info: jest.fn() };
      const verify = makeVerifier([], mockLog);
      verify('any input');

      expect(mockLog.info)
          .toHaveBeenCalledWith(stringMatching(/PASS/));
    });
  });

});
