const samples = require("./fetching-samples-await");

test("on fetch succes with good content, returns true", () => {
  const result = samples.onFetchSuccess("illustrative");
  expect(result).toBe(true);
});
