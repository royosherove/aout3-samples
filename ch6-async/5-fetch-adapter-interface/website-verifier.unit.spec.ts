import { isWebsiteAlive } from "./website-verifier";
import { Arg, Substitute } from "@fluffy-spoon/substitute";
import { INetworkAdapter, NetworkAdapterFetchResults } from "./INetworkAdapter";

const makeStubNetworkWithResult = (
  fakeResult: NetworkAdapterFetchResults
): INetworkAdapter => {
  const stubNetwork = Substitute.for<INetworkAdapter>();
  stubNetwork.fetchUrlText(Arg.any()).returns(fakeResult as any);
  return stubNetwork;
};

describe("unit test website verifier", () => {
  test("with good content, returns true", async () => {
    const stubNetwork = makeStubNetworkWithResult({
      ok: true,
      text: "illustrative",
    });
    const result = await isWebsiteAlive(stubNetwork);
    expect(result).toBe(true);
  });

  test("with bad content, returns false", async () => {
    const stubNetwork = makeStubNetworkWithResult({
      ok: true,
      text: "unexpected content",
    });
    const result = await isWebsiteAlive(stubNetwork);
    expect(result).toBe(false);
  });

  test("with bad url or network, returns false", async () => {
    const stubNetwork = makeStubNetworkWithResult({
      ok: false,
      text: "any text",
    });
    const result = await isWebsiteAlive(stubNetwork);
    expect(result).toBe(false);
  });
});
