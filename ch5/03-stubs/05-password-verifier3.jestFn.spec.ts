import { IComplicatedLogger } from "../02-longinterfaces-faking/interfaces/complicated-logger";
import { Arg, Substitute } from "@fluffy-spoon/substitute";
import { PasswordVerifier3 } from "./00-password-verifier3";
import { MaintenanceWindow } from "./maintenance-window";

describe("working with substitute part 2", () => {
  test("verify, with logger, calls logger", () => {
    const stubMaintWindow: MaintenanceWindow = {
      isUnderMaintenance: jest
        .fn()
        .mockImplementationOnce(() => true)
        .mockImplementationOnce(() => false),
    };

    const mockLog = Substitute.for<IComplicatedLogger>();

    const verifier = new PasswordVerifier3([], mockLog, stubMaintWindow);

    verifier.verify("anything");

    mockLog.received().info(
      Arg.is((s) => s.includes("Maintenance")),
      "verify"
    );
  });
});
