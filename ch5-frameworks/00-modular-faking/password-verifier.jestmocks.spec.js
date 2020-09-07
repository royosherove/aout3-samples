jest.mock("./complicated-logger");
jest.mock("./configuration-service");

const { stringMatching } = expect;
const { verifyPassword } = require("./password-verifier");
const mockLoggerModule = require("./complicated-logger");
const stubConfigModule = require("./configuration-service");

describe("password verifier", () => {
  afterEach(jest.resetAllMocks);

  test(`with info log level and no rules, 
          it calls the logger with PASSED`, () => {
    stubConfigModule.getLogLevel.mockReturnValue("info");

    verifyPassword("anything", []);

    expect(mockLoggerModule.info).toHaveBeenCalledWith(stringMatching(/PASS/));
  });

  test(`with debug log level and no rules, 
          it calls the logger with PASSED`, () => {
    stubConfigModule.getLogLevel.mockReturnValue("debug");

    verifyPassword("anything", []);

    expect(mockLoggerModule.debug).toHaveBeenCalledWith(stringMatching(/PASS/));
  });
});
