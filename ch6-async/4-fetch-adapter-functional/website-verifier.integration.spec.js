const realNetwork = require("./network-adapter");
const webverifier = require("./website-verifier");

test("integration test: fetching with callback", async () => {
  const result = await webverifier.isWebsiteAlive(realNetwork);
  expect(result).toBe(true);
});
