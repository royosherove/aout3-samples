const { verifyPassword, injectDependencies, resetDependencies } = require('./password-verifier-after');
const { stringMatching } = expect;

describe('password verifier', () => {
  afterEach(resetDependencies);

  describe('given logger and passing scenario', () => {
    it('calls the logger with PASS', () => {
      const mockLog = { info: jest.fn() };
      injectDependencies({ log: mockLog });

      verifyPassword('anything', []);

      expect(mockLog.info)
        .toHaveBeenCalledWith(stringMatching(/PASS/));
    });
  });
});
