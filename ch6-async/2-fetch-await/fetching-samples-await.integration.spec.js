const samples = require("./fetching-samples-await");

test("isWebsiteAlive with real website returns true", async () => {
  const result = await samples.isWebsiteAliveWithAsyncAwait();
  expect(result).toBe(true);
});
