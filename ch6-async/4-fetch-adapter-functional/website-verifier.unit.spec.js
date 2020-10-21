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
    const stubSyncNetwork = makeStubNetworkWithResult({
      ok: true,
      text: "illustrative",
    });
    const result = await webverifier.isWebsiteAlive(stubSyncNetwork);
    expect(result.success).toBe(true);
    expect(result.status).toBe("ok");
  });

  test("with bad content, returns false", async () => {
    const stubSyncNetwork = makeStubNetworkWithResult({
      ok: true,
      text: "unexpected content",
    });
    const result = await webverifier.isWebsiteAlive(stubSyncNetwork);
    expect(result.success).toBe(false);
    expect(result.status).toBe("missing text");
  });

  test("with bad url or network, throws", async () => {
    const stubSyncNetwork = makeStubNetworkWithResult({
      ok: false,
      text: "some error",
    });
    try {
      await webverifier.isWebsiteAlive(stubSyncNetwork);
      fail("promise.rejext expected");
    } catch (err) {
      expect(err.success).toBe(false);
      expect(err.status).toBe("some error");
    }
  });
});
