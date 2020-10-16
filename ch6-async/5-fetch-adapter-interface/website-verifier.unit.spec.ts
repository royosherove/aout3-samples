import { isWebsiteAlive } from "./website-verifier";
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
    const stubNetwork = makeStubNetworkWithResult({
      ok: true,
      text: "illustrative",
    });
    const result = await isWebsiteAlive(stubNetwork);
    expect(result.success).toBe(true);
    expect(result.status).toBe("ok");
  });

  test("with bad content, returns false", async () => {
    const stubNetwork = makeStubNetworkWithResult({
      ok: true,
      text: "unexpected content",
    });
    const result = await isWebsiteAlive(stubNetwork);
    expect(result.success).toBe(false);
    expect(result.status).toBe("missing text");
  });

  test("with bad url or network, returns false", async () => {
    const stubNetwork = makeStubNetworkWithResult({
      ok: false,
      text: "fake network error",
    });
    const result = await isWebsiteAlive(stubNetwork);
    expect(result.success).toBe(false);
    expect(result.status).toBe("fake network error");
  });
});
