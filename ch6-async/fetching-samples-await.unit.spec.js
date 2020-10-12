const samples = require("./fetching-samples-callback");

test("integration test: fetching with callback", (done) => {
  samples.onFetchFinished("illustrative", (result) => {
    expect(result).toBe(true);
    done();
  });
});
