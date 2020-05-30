const { verifyPasswordCurried } = require('./verifier.curried');

describe('verifier with fake chain of config and logger', () => {
  test('verifier, with a curried config and logger fake chain, calls the logger', () => {
    let writtenInfo;
    const fakeConfig = () => ({
      logger: {
        info: (text) => writtenInfo = text
      }
    });

    const curriedFn = verifyPasswordCurried([], fakeConfig);

    curriedFn('anything');

    // assert that config.log was called
    expect(writtenInfo).toBe('PASSED');
  });
});
