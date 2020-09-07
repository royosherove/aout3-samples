const { PasswordVerifier } = require("./00-password-verifier00");

describe("duck typing with function constructor injection", () => {
  describe("password verifier", () => {
    test("given logger and passing scenario, calls logger with PASSED", () => {
      let logged = "";
      const mockLog = { info: (text) => (logged = text) };
      const verifier = new PasswordVerifier([], mockLog);
      verifier.verify("any input");

      expect(logged).toMatch(/PASSED/);
    });
  });
});
