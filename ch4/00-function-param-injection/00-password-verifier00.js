// this dependency is impossible ot fake with traditional injection techniques
const log = require('./complicated-logger');

const verifyPassword = (input, rules) => {
  const failed = rules
    .map(rule => rule(input))
    .filter(result => result === false);

  console.log(failed);
  if (failed.count === 0) {
    // this line is impossible to test with traditional injection techniques
    log.info('PASSED');
    return true;
  }
  // this line is impossible to test with traditional injection techniques
  log.info('FAIL');
  return false;
};

const verifyPassword2 = (input, rules, logger) => {
  const failed = rules
    .map(rule => rule(input))
    .filter(result => result === false);

  // console.log(failed);
  if (failed.length === 0) {
    logger.info('PASSED');
    return true;
  }
  logger.info('FAIL');
  return false;
};

module.exports = {
  verifyPassword,
  verifyPassword2
};
