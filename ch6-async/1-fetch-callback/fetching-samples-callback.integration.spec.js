const samples = require("./fetching-samples-callback");

test("isWebsiteAlive with real website returns true", (done) => {
  samples.isWebsiteAlive((err, result) => {
    expect(err).toBeNull();
    expect(result.success).toBe(true);
    done();
  });
});
