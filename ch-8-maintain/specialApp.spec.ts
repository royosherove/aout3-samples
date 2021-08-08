import { getUserCache } from "./sharedUserCache";
import { SpecialApp } from "./specialApp";

describe("Test Dependence", () => {
  describe("loginUser with loggedInUser", () => {
    test("A: no user, login fails", () => {
      const app = new SpecialApp();
      const result = app.loginUser("a", "abc");
      expect(result).toBe(false);
    });

    test("B: can only cache each user once", () => {
      getUserCache().addUser({
        key: "a",
        password: "abc",
      });

      expect(() =>
        getUserCache().addUser({
          key: "a",
          password: "abc",
        })
      ).toThrowError("already exists");
    });

    test("C: user exists, login succeeds", () => {
      const app = new SpecialApp();
      const result = app.loginUser("a", "abc");
      expect(result).toBe(true);
    });
  });
});
