jest.mock("./network-adapter"); // must be first line
const fakeNetwork = require("./network-adapter");
const webverifier = require("./website-verifier");

describe("unit test website verifier", () => {
  beforeEach(jest.resetAllMocks);

  test("with good content, returns true", async () => {
    fakeNetwork.fetchUrlText.mockReturnValue({
      ok: true,
      text: "illustrative",
    });
    const result = await webverifier.isWebsiteAlive();
    expect(result).toBe(true);
  });

  test("with bad content, returns false", async () => {
    fakeNetwork.fetchUrlText.mockReturnValue({
      ok: true,
      text: "unexpected content",
    });
    const result = await webverifier.isWebsiteAlive();
    expect(result).toBe(false);
  });

  test("with bad url or network, returns false", async () => {
    fakeNetwork.fetchUrlText.mockReturnValue({
      ok: false,
      text: "any text",
    });
    const result = await webverifier.isWebsiteAlive();
    expect(result).toBe(false);
  });
});
