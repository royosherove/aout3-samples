jest.mock("./complicated-logger");
jest.mock("./configuration-service");

const { stringMatching } = expect;
const { verifyPassword } = require("./password-verifier-before");
const logger = require("./complicated-logger");
const configs = require("./configuration-service");

describe("password verifier", () => {
  afterEach(jest.resetAllMocks);

  test('with info log level and no rules, it calls the logger with PASSED', () => {
    configs.getLogLevel.mockReturnValue("info");

    verifyPassword("anything", []);

    expect(logger.info).toHaveBeenCalledWith(stringMatching(/PASS/));
  });

  test('with debug log level and no rules, it calls the logger with PASSED', () => {
      configs.getLogLevel.mockReturnValue("debug");

      verifyPassword("anything", []);

      expect(logger.debug).toHaveBeenCalledWith(stringMatching(/PASS/));
  });
});
