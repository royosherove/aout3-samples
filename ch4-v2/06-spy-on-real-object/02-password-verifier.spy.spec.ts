import { PasswordVerifier } from "./00-password-verifier";
import { RealLogger } from "./real-logger";
import stringMatching = jasmine.stringMatching;

describe("password verifier with interfaces", () => {
  test("verify, with logger, calls logger", () => {
    const testableLog: RealLogger = new RealLogger();
    let logged = "";
    testableLog.info = (text) => (logged = text);

    const verifier = new PasswordVerifier([], testableLog);
    verifier.verify("any input");

    expect(logged).toMatch(/PASSED/);
  });
});
