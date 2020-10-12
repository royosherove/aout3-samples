const samples = require("./fetching-samples-await");

test("integration test: fetching with async await", async () => {
  const result = await samples.isWebsiteAliveWithAsyncAwait();
  expect(result).toBe(true);
});
