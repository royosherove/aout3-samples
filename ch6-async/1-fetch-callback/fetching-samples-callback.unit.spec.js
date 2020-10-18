const samples = require("./fetching-samples-callback");

describe("Website alive checking", () => {
  test("When website fetch content matches, returns true", () => {
    samples.processFetchSuccess("illustrative", (result) => {
      expect(result.success).toBe(true);
      expect(result.status).toBe("ok");
    });
  });
  test("When website fetch content does not match, returns false", () => {
    samples.processFetchSuccess("text not on the website", (result) => {
      expect(result.success).toBe(false);
      expect(result.status).toBe("missing text");
    });
  });
  test("When fetch fails, returns false", () => {
    samples.processFetchError("error text", (result) => {
      expect(result.success).toBe(false);
      expect(result.status).toBe("error text");
    });
  });
});
