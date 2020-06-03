const { verifyPasswordModular, inject } = require('./verifier.modular');
describe('verifyPassword modular dependency injection with fake chains', () => {
  describe('given a fake chain as a module depdenency', () => {
    it('calls a fake logger inside a chain', () => {
      let infoWritten;
      const fakeConfigFn = () => ({ // < --our stub
        logger: { // <-- our mock object
          info: text => {
            infoWritten = text;
          }
        }
      });

      inject({
        configFn: fakeConfigFn
      });

      verifyPasswordModular([], 'anything');
      expect(infoWritten).toBe('PASSED');
    });
  });
});
