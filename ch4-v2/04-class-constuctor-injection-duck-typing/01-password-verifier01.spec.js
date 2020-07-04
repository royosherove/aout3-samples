const { PasswordVerifier } = require("./00-password-verifier00");

class FakeLogger {
  logged = "";

  info(text) {
    this.logged = text;
  }
}

describe("with FakeLogger class  - constructor injection", () => {
  describe("password verifier", () => {
    test("given logger and passing scenario, calls logger with PASSED", () => {
      let logged = "";
      const mockLog = new FakeLogger();
      const verifier = new PasswordVerifier([], mockLog);
      verifier.verify("any input");

      expect(mockLog.logged).toMatch(/PASSED/);
    });
  });
});
