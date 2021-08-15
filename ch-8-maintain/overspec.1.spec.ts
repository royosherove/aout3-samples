import { PasswordVerifier4 } from "./00-password-verifier4";
import { Substitute } from "@fluffy-spoon/substitute";
import { IComplicatedLogger } from "./interfaces/complicated-logger";

describe("verifier 4", () => {
  describe("overcpecify protected function call", () => {
    test("checkfailedFules is called", () => {
      const pv4 = new PasswordVerifier4(
        [],
        Substitute.for<IComplicatedLogger>()
      );
      // the fake function returns an empty array
      const failedMock = jest.fn(() => []);
      pv4["findFailedRules"] = failedMock;

      pv4.verify("abc");

      //Don't do this
      expect(failedMock).toHaveBeenCalled();
    });
  });
});
