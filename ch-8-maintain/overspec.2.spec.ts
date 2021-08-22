import { PasswordVerifier5 } from "./00-password-verifier5";

describe("verifier 5", () => {
  describe("overcpecify outputs", () => {
    test("overspecify order and schema", () => {
      const pv5 = new PasswordVerifier5([(input) => input.includes("abc")]);
      const results = pv5.verify(["a", "ab", "abc", "abcd"]);
      expect(results).toEqual([
        { input: "a", result: false },
        { input: "ab", result: false },
        { input: "abc", result: true },
        { input: "abcd", result: true },
      ]);
    });

    test("overspecify order but ignore schema", () => {
      const pv5 = new PasswordVerifier5([(input) => input.includes("abc")]);
      const results = pv5.verify(["a", "ab", "abc", "abcd"]);
      expect(results.length).toBe(4);
      expect(results[0].result).toBe(false);
      expect(results[1].result).toBe(false);
      expect(results[2].result).toBe(true);
      expect(results[3].result).toBe(true);
    });

    test("ignore order and schema", () => {
      const pv5 = new PasswordVerifier5([(input) => input.includes("abc")]);

      const results = pv5.verify(["a", "ab", "abc", "abcd"]);

      const falseResults = results.filter((res) => !res.result);
      const trueResults = results.filter((res) => res.result);
      expect(results.length).toBe(4);
      expect(falseResults.length).toBe(2);
      expect(trueResults.length).toBe(2);
    });
  });
});
