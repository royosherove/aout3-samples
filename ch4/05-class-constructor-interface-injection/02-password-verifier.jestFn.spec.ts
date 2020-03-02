import {ILogger, PasswordVerifier} from "./00-password-verifier";
import mock = jest.mock;
const {stringMatching} = expect;


describe('password verifier with interfaces', () => {
    describe('duck typing still works', () => {
        test('verify, with logger, calls logger', () => {
            const mockLog = {
                info: jest.fn()
            };

            const verifier = new PasswordVerifier([], mockLog);

            verifier.verify('anything');

            expect(mockLog.info).toHaveBeenCalledWith(stringMatching(/PASS/));
        });
    });
    describe('partial faking', () => {
        class FakeLogger implements ILogger {
            info(text: string) {
            }
        }

        test('verify, with logger, calls logger', () => {
            const mockLog = new FakeLogger();
            mockLog.info = jest.fn();

            const verifier = new PasswordVerifier([], mockLog);

            verifier.verify('anything');

            expect(mockLog.info).toHaveBeenCalledWith(stringMatching(/PASS/));
        });
    });
});
