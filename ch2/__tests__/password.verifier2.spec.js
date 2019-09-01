const PasswordVerifier2 = require('../password-verifier2');

test('the first test', () => {
  const verifier = new PasswordVerifier2();
  const fakeRule = input => ({ passed: false, reason: `${input} fake reason` });

  verifier.addRule(fakeRule);
  const result = verifier.verify('any value');

  expect(result[0]).toContain('fake reason');
});
