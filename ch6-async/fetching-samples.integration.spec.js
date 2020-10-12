const samples = require("./fetching-samples1");

test("integration test: fetching with callback", (done) => {
  samples.isWebsiteAliveWithCallback((result) => {
    expect(result).toBe(true);
    done();
  });
});

test("integration test: fetching with async await", async () => {
  const result = await samples.isWebsiteAliveWithAsyncAwait();
  expect(result).toBe(true);
});
