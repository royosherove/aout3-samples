const { SATURDAY, inject, reset, verifyPassword } = require('./password-verifier-time01-modular');

describe('verifyPassword', () => {
  afterEach(reset);
  describe('when its the weekend', () => {
    it('throws an error', () => {
      inject({
        // strongly tied into the interface of the external dependency
        moment: function () {
          return {
            day: () => SATURDAY
          };
        }
      });

      expect(() => verifyPassword('any input'))
        .toThrowError("It's the weekend!");
    });
  });
});
