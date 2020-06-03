import {PasswordVerifier} from "./00-password-verifier";
import {ILogger} from "./interfaces/logger";
const {stringMatching} = expect;


describe('duck typing with strongly typed interfaces', () => {
    describe('password verifier', () => {
        test('with logger and passing, calls logger', () => {

            const mockLog: ILogger = {
                info: jest.fn()
            };

            const verifier = new PasswordVerifier([], mockLog);

            verifier.verify('anything');

            expect(mockLog.info)
                .toHaveBeenCalledWith(stringMatching(/PASS/));
        });
    });
});

describe('Late Faking', () => {
    class FakeLogger implements ILogger {
        info(text: string) {
        }
    }

    test('verify, with logger, calls logger', () => {
        const mockLog = new FakeLogger();
        mockLog.info = jest.fn();

        const verifier = new PasswordVerifier([], mockLog);

        verifier.verify('anything');

        expect(mockLog.info).
        toHaveBeenCalledWith(stringMatching(/PASS/));
    });
});
