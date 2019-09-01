const PasswordVerifier1 = require('../password-verifier1');

test('the first test', () => {
  const verifier = new PasswordVerifier1();

  const fakeRule = input => ({ passed: false, reason: `${input} fake reason` });

  verifier.addRule(fakeRule);
  const result = verifier.verify('any value');

  expect(result[0]).toContain('fake reason');
});
