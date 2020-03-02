import {PasswordVerifier } from "./00-password-verifier";
import {ILogger} from "./intefaces/logger";

class FakeLogger implements ILogger {
    written:string;
    info(text: string) {
        this.written = text;
    }
}

describe('password verifier with interfaces', () => {
    test('verify, with logger, calls logger', () => {
        const mockLog = new FakeLogger();
        const verifier = new PasswordVerifier([], mockLog);

        verifier.verify('anything');

        expect(mockLog.written).toMatch(/PASS/);
    });
});
