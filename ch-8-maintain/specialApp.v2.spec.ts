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
    it("can only add cache use once", () => {
      addDefaultUser();

      expect(() => addDefaultUser()).toThrowError("already exists");
    });
  });
  describe("loginUser with loggedInUser", () => {
    it("user exists, login succeeds", () => {
      addDefaultUser();
      const app = makeSpecialApp();

      const result = app.loginUser("a", "abc");
      expect(result).toBe(true);
    });

    it("user missing, login fails", () => {
      const app = makeSpecialApp();

      const result = app.loginUser("a", "abc");
      expect(result).toBe(false);
    });
  });
});
