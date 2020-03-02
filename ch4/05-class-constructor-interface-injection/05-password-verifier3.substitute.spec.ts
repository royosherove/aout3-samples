import {IComplicatedLogger} from "./intefaces/complicated-logger";
import {Arg, Substitute} from "@fluffy-spoon/substitute";
import {IMaintenanceWindow, PasswordVerifier3} from "./00-password-verifier3";


describe('password verifier with interfaces', () => {
        test('verify, with logger, calls logger', () => {
            const stubMaintWindow = Substitute.for<IMaintenanceWindow>();
            stubMaintWindow.isUnderMaintenance().returns(true);
            const mockLog = Substitute.for<IComplicatedLogger>();
            const verifier = new PasswordVerifier3([], mockLog, stubMaintWindow);

            verifier.verify('anything');

            mockLog.received()
                .info(Arg.is(s=>s.includes('Maintenance')))
        });
});
