import { PasswordVerifier } from "./00-password-verifier";
import { ILogger } from "./interfaces/logger";
const { stringMatching } = expect;

describe("duck typing with strongly typed interfaces", () => {
  describe("password verifier", () => {
    test("with logger and passing, calls logger", () => {
      let logged = "";
      const mockLog: ILogger = {
        info: (text) => (logged = text),
      };

      const verifier = new PasswordVerifier([], mockLog);

      verifier.verify("anything");

      expect(logged).toMatch(/PASSED/);
    });
  });
});

describe("Late Faking", () => {
  class FakeLogger implements ILogger {
    info(text: string) {}
  }

  test("verify, with logger, calls logger", () => {
    const mockLog = new FakeLogger();
    let logged = "";
    mockLog.info = (text) => (logged = text);

    const verifier = new PasswordVerifier([], mockLog);

    verifier.verify("anything");

    expect(logged).toMatch(/PASSED/);
  });
});
