const { verifyPassword3 } = require("./00-password-verifier00");
const { stringMatching } = expect;

describe("password verifier", () => {
  describe("given logger and passing scnario", () => {
    it("calls the logger with PASS", () => {
      let logged = "";
      const mockLog = { info: (text) => (logged = text) };
      const injectedVerify = verifyPassword3([], mockLog);

      // this partially applied function can be passed arround
      // to other places in the code
      // without needing to inject the logger
      injectedVerify("anything");

      expect(logged).toMatch(/PASSED/);
    });
  });
});
