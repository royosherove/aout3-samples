import {IComplicatedLogger} from "./interfaces/complicated-logger";
import {Arg, Substitute} from "@fluffy-spoon/substitute";
import {PasswordVerifier3} from "./00-password-verifier3";
import {MaintenanceWindow} from "./interfaces/maintenance-window";


describe('working with substitute part 2', () => {
    test('verify, with logger, calls logger', () => {
        const stubMaintWindow = Substitute.for<MaintenanceWindow>();
        stubMaintWindow.isUnderMaintenance().returns(true);
        const mockLog = Substitute.for<IComplicatedLogger>();
        const verifier = new PasswordVerifier3([], mockLog, stubMaintWindow);

        verifier.verify('anything');

        mockLog.received()
            .info(Arg.is(s=>s.includes('Maintenance')))
    });
});
