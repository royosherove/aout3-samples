const verifyPassword = require('../password-verifier0');

test('the first test', () => {
  const fakeRule = input => ({ passed: false, reason: `${input} fake reason` });

  const errors = verifyPassword('any value', [fakeRule]);
  expect(errors[0]).toContain('fake reason');
});
