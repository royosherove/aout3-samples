jest.mock("./network-adapter"); // must be first line
const stubSyncNetwork = require("./network-adapter");
const webverifier = require("./website-verifier");

describe("unit test website verifier", () => {
  beforeEach(jest.resetAllMocks);

  test("with good content, returns true", async () => {
    stubSyncNetwork.fetchUrlText.mockReturnValue({
      ok: true,
      text: "illustrative",
    });
    const result = await webverifier.isWebsiteAlive();
    expect(result.success).toBe(true);
    expect(result.status).toBe("ok");
  });

  test("with bad content, returns false", async () => {
    stubSyncNetwork.fetchUrlText.mockReturnValue({
      ok: true,
      text: "<span>hello world</span>",
    });
    const result = await webverifier.isWebsiteAlive();
    expect(result.success).toBe(false);
    expect(result.status).toBe("missing text");
  });

  test("with bad url or network, throws", async () => {
    stubSyncNetwork.fetchUrlText.mockReturnValue({
      ok: false,
      text: "some network error",
    });
    try {
      await webverifier.isWebsiteAlive(stubSyncNetwork);
      fail("promise.rejext expected");
    } catch (err) {
      expect(err.success).toBe(false);
      expect(err.status).toBe("some network error");
    }
  });
});
