const samples = require("./fetching-samples-callback");

test("isWebsiteAlive with real website returns true", (done) => {
  samples.isWebsiteAliveWithCallback((result) => {
    expect(result.success).toBe(true);
    done();
  });
});
