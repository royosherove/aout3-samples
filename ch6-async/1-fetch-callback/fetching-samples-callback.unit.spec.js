const samples = require("./fetching-samples-callback");

test("When website fetch content matches, returns true", (done) => {
  samples.onFetchSuccess("illustrative", (result) => {
    expect(result).toBe(true);
    done();
  });
});
