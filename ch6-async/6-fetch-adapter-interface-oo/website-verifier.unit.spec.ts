import { WebsiteVerifier } from "./website-verifier";
import { Arg, Substitute } from "@fluffy-spoon/substitute";
import { INetworkAdapter, NetworkAdapterFetchResults } from "./INetworkAdapter";

const makeStubNetworkWithResult = (
  fakeResult: NetworkAdapterFetchResults
): INetworkAdapter => {
  const stubNetwork = Substitute.for<INetworkAdapter>();
  stubNetwork.fetchUrlText(Arg.any()).returns(Promise.resolve(fakeResult));
  return stubNetwork;
};

describe("unit test website verifier", () => {
  test("with good content, returns true", async () => {
    const stubSyncNetwork = makeStubNetworkWithResult({
      ok: true,
      text: "illustrative",
    });
    const webVerifier = new WebsiteVerifier(stubSyncNetwork);

    const result = await webVerifier.isWebsiteAlive();
    expect(result.success).toBe(true);
    expect(result.status).toBe("ok");
  });

  test("with bad content, returns false", async () => {
    const stubSyncNetwork = makeStubNetworkWithResult({
      ok: true,
      text: "unexpected content",
    });
    const webVerifier = new WebsiteVerifier(stubSyncNetwork);

    const result = await webVerifier.isWebsiteAlive();
    expect(result.success).toBe(false);
    expect(result.status).toBe("missing text");
  });

  test("with bad url or network, throws", async () => {
    const stubSyncNetwork = makeStubNetworkWithResult({
      ok: false,
      text: "fake network error",
    });
    try {
      const webVerifier = new WebsiteVerifier(stubSyncNetwork);

      await webVerifier.isWebsiteAlive();
      fail("expected promise.reject via simulated network error");
    } catch (err) {
      expect(err.success).toBe(false);
      expect(err.status).toBe("fake network error");
    }
  });
});
