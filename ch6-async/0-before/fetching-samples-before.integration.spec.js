const samples = require("./fetching-samples-before");

test("real website with correct content, returns true (callbacks)", (done) => {
  samples.isWebsiteAliveWithCallback((result) => {
    expect(result).toBe(true);
    done();
  });
});

test("real website with correct content, returns true (await)", async () => {
  const result = await samples.isWebsiteAliveWithAsyncAwait();
  expect(result).toBe(true);
});
