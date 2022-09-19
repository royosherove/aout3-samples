const trust = require("./trust");

describe("trigger", () => {
  it("works", () => {
    const callback = jest.fn();
    const result = trust.trigger(1, 2, callback);
    expect(result).toBe(3);
    expect(callback).toHaveBeenCalledWith("I'm triggered");
  });
});

describe("trigger", () => {
  it("triggers a given callback", () => {
    const callback = jest.fn();
    trust.trigger(1, 2, callback);
    expect(callback).toHaveBeenCalledWith("I'm triggered");
  });

  it("sums up given values", () => {
    const result = trust.trigger(1, 2, jest.fn());
    expect(result).toBe(3);
  });
});

describe("makePerson", () => {
  it("createsperson given passed in values", () => {
    const result = trust.makePerson("name", 1);
    expect(result.name).toBe("name");
    expect(result.age).toBe(1);
  });
});

describe("makeGreeting", () => {
  it("returns correct greeting for name", () => {
    const name = "abc";
    const result = trust.makeGreeting(name);
    expect(result).toBe("hello" + name); // bug in the test - expected to fail
  });

  it("returns correct greeting for name 2", () => {
    const result = trust.makeGreeting("abc");
    //this test is supposed to fail
    expect(result).toBe("hello abc");
  });
});

describe("isName", () => {
  const namesToTest = ["firstOnly", "first second", ""];

  it("correctly finds out if it is a name", () => {
    namesToTest.forEach((name) => {
      const result = trust.isName(name);
      if (name.includes(" ")) {
        expect(result).toBe(true);
      } else {
        expect(result).toBe(false);
      }
    });
  });
});
