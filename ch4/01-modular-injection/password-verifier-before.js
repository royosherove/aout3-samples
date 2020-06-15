const { info, debug } = require("./complicated-logger");
const { getLogLevel } = require("./configuration-service");
const _ = require("lodash");

const log = (text) =>{
  if (getLogLevel() === "info") {
    info(text);
  }
  if (getLogLevel() === "debug") {
    debug(text);
  }
}

const verifyPassword = (input, rules) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => result === false);

  if (failed.length === 0) {
    log("PASSED");
    return true;
  }
  log("FAIL");
  return false;
};

const verifyPasswordWithCurrying = _.curry((rules, logger, input) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => result === false);

  if (failed.length === 0) {
    log("PASSED");
    return true;
  }
  log("FAIL");
  return false;
});

module.exports = {
  verifyPassword,
  verifyPasswordWithCurrying,
};
