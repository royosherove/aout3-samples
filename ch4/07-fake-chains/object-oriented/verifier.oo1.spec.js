const { PasswordVerifier } = require('./verifier.oo');

describe('verifier with config dependency', () => {
  test('verify, when passes, calls the logger with output', () => {
    let infoWritten;
    const fakeConfigFn = () => ({ // < --our stub
      log: { // <-- our mock object
        info: text => {
          infoWritten = text;
        }
      }
    });

    const verifier = new PasswordVerifier([], fakeConfigFn);

    verifier.verify('anything');

    expect(infoWritten).toBe('PASSED');
  });
});
