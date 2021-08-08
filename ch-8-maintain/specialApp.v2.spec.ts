import { getUserCache } from "./sharedUserCache";
import { SpecialApp } from "./specialApp";

const addDefaultUser = () =>
  getUserCache().addUser({
    key: "a",
    password: "abc",
  });
const makeSpecialApp = () => new SpecialApp();

describe("Test Dependence v2", () => {
  beforeEach(() => getUserCache().reset());
  describe("user cache", () => {
    test("B: can only cache each user once", () => {
      addDefaultUser();

      expect(() => addDefaultUser()).toThrowError("already exists");
    });
  });
  describe("loginUser with loggedInUser", () => {
    test("A: user exists, login succeeds", () => {
      addDefaultUser();
      const app = makeSpecialApp();

      const result = app.loginUser("a", "abc");
      expect(result).toBe(true);
    });

    test("C: no user , login fails", () => {
      const app = makeSpecialApp();

      const result = app.loginUser("a", "abc");
      expect(result).toBe(false);
    });
  });
});
