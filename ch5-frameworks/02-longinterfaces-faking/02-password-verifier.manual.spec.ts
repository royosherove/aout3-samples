import { PasswordVerifier2 } from "./00-password-verifier2";
import { IComplicatedLogger } from "./interfaces/complicated-logger";

describe("working with long interfaces", () => {
  describe("password verifier", () => {
    class FakeLogger implements IComplicatedLogger {
      debugText = "";
      debugMethod = "";
      errorText = "";
      errorMethod = "";
      infoText = "";
      infoMethod = "";
      warnText = "";
      warnMethod = "";

      debug(text: string, method: string) {
        this.debugText = text;
        this.debugMethod = method;
      }

      error(text: string, method: string) {
        this.errorText = text;
        this.errorMethod = method;
      }

      info(text: string, method: string) {
        this.infoText = text;
        this.infoMethod = method;
      }

      warn(text: string, method: string) {
        this.warnText = text;
        this.warnMethod = method;
      }
    }

    test("verify, with logger and passing, calls logger with PASS", () => {
      const mockLog = new FakeLogger();
      const verifier = new PasswordVerifier2([], mockLog);

      verifier.verify("anything");

      expect(mockLog.infoText).toMatch(/PASSED/);
    });
  });
});
