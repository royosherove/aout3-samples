const samples = require("./fetching-samples-promises");

describe("website up check", () => {
  test("on fetch success with good content, returns true", () => {
    const result = samples.processFetchContent("illustrative");
    expect(result.success).toBe(true);
    expect(result.status).toBe("ok");
  });
  test("on fetch success with bad content, returns false", () => {
    const result = samples.processFetchContent("text not on site");
    expect(result.success).toBe(false);
    expect(result.status).toBe("missing text");
  });
  test("on fetch fail, returns error text and false", () => {
    expect(() => samples.processFetchError("error text")).toThrowError(
      "error text"
    );
  });
});
