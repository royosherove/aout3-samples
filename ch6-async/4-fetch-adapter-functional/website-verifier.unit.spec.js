const webverifier = require("./website-verifier");

const makeStubNetworkWithResult = (fakeResult) => {
  return {
    fetchUrlText: () => {
      return fakeResult;
    },
  };
};
describe("unit test website verifier", () => {
  test("with good content, returns true", async () => {
    const stubNetwork = makeStubNetworkWithResult({
      ok: true,
      text: "illustrative",
    });
    const result = await webverifier.isWebsiteAlive(stubNetwork);
    expect(result.success).toBe(true);
  });

  test("with bad content, returns false", async () => {
    const stubNetwork = makeStubNetworkWithResult({
      ok: true,
      text: "unexpected content",
    });
    const result = await webverifier.isWebsiteAlive(stubNetwork);
    expect(result.success).toBe(false);
  });

  test("with bad url or network, returns false", async () => {
    const stubNetwork = makeStubNetworkWithResult({
      ok: false,
      text: "any text",
    });
    const result = await webverifier.isWebsiteAlive(stubNetwork);
    expect(result.success).toBe(false);
  });
});
