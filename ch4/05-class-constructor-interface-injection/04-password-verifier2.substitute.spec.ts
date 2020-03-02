import {PasswordVerifier} from "./00-password-verifier";
import {IComplicatedLogger} from "./intefaces/complicated-logger";
import {Arg, Substitute} from "@fluffy-spoon/substitute";
import {PasswordVerifier2} from "./00-password-verifier2";


describe('password verifier with interfaces', () => {
        test('verify, with logger, calls logger', () => {
            const mockLog = Substitute.for<IComplicatedLogger>();
            const verifier = new PasswordVerifier2([], mockLog);

            verifier.verify('anything');

            mockLog.received()
                .info(Arg.is(s=>s.includes('PASS')))
        });
});
