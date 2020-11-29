const { Adder } = require("./event-based-module");
describe("events based module", () => {
  describe("add", () => {
    it("generates addition event when called", (done) => {
      const adder = new Adder();
      adder.on("added", (result) => {
        expect(result).toBe(3);
        done();
      });
      adder.add(1, 2);
    });
  });
});
