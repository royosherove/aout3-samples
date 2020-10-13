const samples = require("../2-fetch-await/fetching-samples-await");

test("integration test: fetching with async await", () => {
  const result = samples.onFetchSuccess("illustrative");
  expect(result).toBe(true);
});
