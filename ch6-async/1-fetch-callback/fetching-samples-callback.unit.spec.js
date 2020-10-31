const samples = require("./fetching-samples-callback");

describe("Website alive checking", () => {
  test("When website fetch content matches, returns true", () => {
    samples.processFetchSuccess("illustrative", (err, result) => {
      expect(err).toBeNull();
      expect(result.success).toBe(true);
      expect(result.status).toBe("ok");
    });
  });
  test("When website fetch content does not match, returns false", () => {
    samples.processFetchSuccess("text not on the website", (err, result) => {
      expect(err.message).toBe("missing text");
    });
  });
  test("When fetch fails, returns false", () => {
    samples.processFetchError(new Error("error text"), (err, result) => {
      expect(err.message).toBe("error text");
    });
  });
});
