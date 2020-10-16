import { NetworkAdapter } from "./network-adapter";
import { isWebsiteAlive } from "./website-verifier";

test("integration test: fetching with callback", async () => {
  const result = await isWebsiteAlive(new NetworkAdapter());
  expect(result.success).toBe(true);
  expect(result.status).toBe("ok");
});
