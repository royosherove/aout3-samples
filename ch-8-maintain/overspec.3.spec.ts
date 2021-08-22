import { PasswordVerifier6 } from "./00-password-verifier6";

describe("verifier 6", () => {
  test("over specify string", () => {
    const pv5 = new PasswordVerifier6([(input) => input.includes("abc")]);

    pv5.verify(["a", "ab", "abc", "abcd"]);
    const msg = pv5.getMsg();
    expect(msg).toBe("you have 2 failed rules.");
  });
  test("more future proof string checking", () => {
    const pv5 = new PasswordVerifier6([(input) => input.includes("abc")]);

    pv5.verify(["a", "ab", "abc", "abcd"]);
    const msg = pv5.getMsg();
    expect(msg).toMatch(/2 failed/);
  });
});
