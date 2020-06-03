const { verifyPasswordCurried } = require('./verifier.curried');

const makeFakeConfig = (replaceLogInfoFn) => {
  return function () {
    return {
      logger: {
        info: replaceLogInfoFn
      }
    };
  };
};

describe('verifier with fake chain of config and logger', () => {
  test('verifier, when passes, calls the logger correctly', () => {
    let writtenInfo;
    const fakeConfig = makeFakeConfig(text => writtenInfo = text);

    const curriedFn = verifyPasswordCurried([], fakeConfig);

    curriedFn('anything');

    // assert that config.log was called
    expect(writtenInfo).toBe('PASSED');
  });
});
