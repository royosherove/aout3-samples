const { AdditionLogger } = require("./logger");
const { Adder } = require("./event-based-module");

describe("logger with events", () => {
  describe("given an adder with events", () => {
    it("logs addition results to log target", () => {
      const mockTarget = { write: jest.fn() };
      const adder = new Adder();
      const logger = new AdditionLogger(adder, mockTarget);

      adder.add(1, 2);

      expect(mockTarget.write).toHaveBeenCalledWith("3");
    });
  });
});
