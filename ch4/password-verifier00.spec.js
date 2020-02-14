const {verifyPassword2} = require("./password-verifier00");

describe('password verifier with logger', () => {
    describe('when all rules pass', () => {
        it('calls the logger with PASSED', () => {

            let written = '';
            const mockLog = {
                info: (text) => {
                    written = text
                }
            };

            verifyPassword2('anything', [], mockLog);

            expect(written).toMatch(/PASSED/)
        });
    });

    describe('using jest.fn', () => {
        it('calls the logger with FAILED', () => {
            const rules = [() => false];

            const mockLog = {
                info: jest.fn()
            };

            verifyPassword2('anything', rules, mockLog);

            expect(mockLog.info).toHaveBeenCalledWith(expect.stringMatching(/FAIL/));
        });
    });
});
