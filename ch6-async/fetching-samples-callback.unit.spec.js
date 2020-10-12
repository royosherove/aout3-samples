const samples = require("./fetching-samples-await");

test("integration test: fetching with async await", () => {
  const result = samples.onFetchFinishedWithoutCallback("illustrative");
  expect(result).toBe(true);
});
