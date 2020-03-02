import {PasswordVerifier} from "./00-password-verifier";
import {IComplicatedLogger} from "./intefaces/complicated-logger";


describe('password verifier with interfaces', () => {
    describe('partial faking', () => {
        class FakeLogger implements IComplicatedLogger {
            debug(text: string, obj: any) {
            }

            error(text: string, location: string, stacktrace: string) {
            }

            info(text: string) {
            }

            warn(text: string) {
            }
        }

        test('verify, with logger, calls logger', () => {
            const mockLog = new FakeLogger();
            mockLog.info = jest.fn();
            mockLog.error = jest.fn();
            mockLog.warn = jest.fn();
            mockLog.debug = jest.fn();

            ///inject the mock..

        });

    });
});
