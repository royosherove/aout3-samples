import { PasswordVerifier } from "./00-password-verifier";

describe("password verifier 1", () => {
  it("passes with zero rules", () => {
    const verifier = new PasswordVerifier([], { info: jest.fn() });
    const result = verifier.verify("any input");
    expect(result).toBe(true);
  });

  it("fails with single failing rule", () => {
    const failingRule = (input) => false;
    const verifier = new PasswordVerifier([failingRule], { info: jest.fn() });
    const result = verifier.verify("any input");
    expect(result).toBe(false);
  });
});
