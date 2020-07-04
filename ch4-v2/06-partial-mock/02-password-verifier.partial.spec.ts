import { PasswordVerifier } from "./00-password-verifier";
import { RealLogger } from "./real-logger";
import mock = jest.mock;

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

class TestableLogger extends RealLogger {
  logged = "";
  info(text) {
    this.logged = text;
  }
  //the error() and debug() functions
  // are still "real"
}
describe("partial mock with inhertiance", () => {
  test("verify with logger, calls logger", () => {
    const mockLog: TestableLogger = new TestableLogger();

    const verifier = new PasswordVerifier([], mockLog);
    verifier.verify("any input");

    expect(mockLog.logged).toMatch(/PASSED/);
  });
});
