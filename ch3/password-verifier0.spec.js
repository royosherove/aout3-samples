const { verifyPassword } = require('./password-verifier0');

  describe('verifyPassword', () => {
    test('given failing rule, returns rule reason in array', () => {
      const fakeRule = input => ({ passed: false, reason: 'fake reason' });

      const errors = verifyPassword('any value', [fakeRule]);

      expect(errors[0]).toContain('fake reason');
    });
  });
