const webverifier = require("./website-verifier");

test("integration test: fetching with callback", async () => {
  const result = await webverifier.isWebsiteAlive();
  expect(result).toBe(true);
});
