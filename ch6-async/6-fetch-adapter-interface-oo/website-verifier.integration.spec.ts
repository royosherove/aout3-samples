import { NetworkAdapter } from "./network-adapter";
import { WebsiteVerifier } from "./website-verifier";

test("integration test: fetching with callback", async () => {
  const webVerifier = new WebsiteVerifier(new NetworkAdapter());

  const result = await webVerifier.isWebsiteAlive();

  expect(result.success).toBe(true);
  expect(result.status).toBe("ok");
});
