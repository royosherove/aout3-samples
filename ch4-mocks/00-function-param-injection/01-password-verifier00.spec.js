const { verifyPassword2 } = require("./00-password-verifier00");

describe("password verifier", () => {
  describe("given logger, and passing scenario", () => {
    it("calls the logger with PASSED", () => {
      let written = "";
      const mockLog = { info: (text) => (written = text) };

      verifyPassword2("anything", [], mockLog);

      expect(written).toMatch(/PASSED/);
    });
  });
});
