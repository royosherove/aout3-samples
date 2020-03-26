const {PasswordVerifier} = require('./verifier.oo');

const makeFakeConfig = (replaceLogInfoFn) => {
    return function () {
        return {
            log: {
                info: replaceLogInfoFn
            }
        };
    }
};

describe('verifier with config dependency', () => {
    test('verify, when passes, calls the logger with output', () => {
        let infoWritten;
        const fakeConfigFn = makeFakeConfig((text) => infoWritten = text);

        const verifier = new PasswordVerifier([], fakeConfigFn);

        verifier.verify('anything');

        expect(infoWritten).toBe("PASSED");
    });
});
