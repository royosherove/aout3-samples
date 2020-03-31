const {LoggerAdapter} = require("./logger-adapter");
const {verifyPasswordCurried} = require("./verifier.curried.2");

describe('verifier with fake chain of config and logger', () => {
    test('verifier, when passes, calls the logger correctly', () => {
        let writtenInfo;
        const loggerAdapter = new LoggerAdapter();
        loggerAdapter.info = text => writtenInfo = text;

        const curriedFn = verifyPasswordCurried([], loggerAdapter);

        curriedFn('anything');

        expect(writtenInfo).toBe("PASSED");
    });
});
