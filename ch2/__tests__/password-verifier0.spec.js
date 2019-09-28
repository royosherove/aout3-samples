const {verifyPassword} = require('../password-verifier0');

test('v1: the first test', () => {
  const fakeRule = input => ({ passed: false, reason: 'fake reason' });

  const errors = verifyPassword('any value', [fakeRule]);
  expect(errors[0]).toMatch('fake reason');
});

test('v1.1 verifyPassword, given a failing rule, returns errors', () => {
  const fakeRule = input => ({ passed: false, reason: 'fake reason' });

  const errors = verifyPassword('any value', [fakeRule]);

  expect(errors[0]).toContain('fake reason');
});

describe('v1.2: verifyPassword', () => {
  test('given a failing rule, returns errors', () => {
    const fakeRule = input =>
      ({ passed: false, reason: `${input} fake reason` });

    const errors = verifyPassword('any value', [fakeRule]);

    expect(errors[0]).toContain('fake reason');
  });
});

describe('v1.3: verifyPassword', () => {
  describe('with a failing rule', () => {
    test('returns errors', () => {
      const fakeRule = input => ({
        passed: false,
        reason: 'fake reason'
      });

      const errors = verifyPassword('any value', [fakeRule]);

      expect(errors[0]).toContain('fake reason');
    });
  });
});

describe('v1.4: verifyPassword', () => {
  describe('with a failing rule', () => {
    it('returns errors', () => {
      const fakeRule = input => ({
        passed: false,
        reason: 'fake reason'
      });

      const errors = verifyPassword('any value', [fakeRule]);

      expect(errors[0]).toContain('fake reason');
    });
  });
});
