const samples = require("./fetching-samples-callback");

describe("Website alive checking", () => {
  test("When website fetch content matches, returns true", () => {
    samples.onFetchSuccess("illustrative", (result) => {
      expect(result.success).toBe(true);
    });
  });
  test("When website fetch content does not match, returns false", () => {
    samples.onFetchSuccess("text not on the website", (result) => {
      expect(result.success).toBe(false);
      expect(result.status).toBe("missing text");
    });
  });
  test("When fetch fails, returns false", () => {
    samples.onFetchError("error text", (result) => {
      expect(result.success).toBe(false);
      expect(result.status).toBe("error text");
    });
  });
});
