const samples = require("../1-fetch-callback/fetching-samples-callback");

test("integration test: fetching with callback", (done) => {
  samples.onFetchFinished("illustrative", (result) => {
    expect(result).toBe(true);
    done();
  });
});
