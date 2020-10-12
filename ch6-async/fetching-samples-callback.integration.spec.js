const samples = require("./fetching-samples-callback");

test("integration test: fetching with callback", (done) => {
  samples.isWebsiteAliveWithCallback((result) => {
    expect(result).toBe(true);
    done();
  });
});
