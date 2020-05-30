const { log } = require('./complicated-logger');
const _ = require('lodash');

const verifyPassword = (input, rules) => {
  const failed = rules
    .map(rule => rule(input))
    .filter(result => result === false);

  if (failed.length === 0) {
    log.info('PASSED');
    return true;
  }
  log.info('FAIL');
  return false;
};

const verifyPasswordWithCurrying = _.curry((rules, logger, input) => {
  const failed = rules
    .map(rule => rule(input))
    .filter(result => result === false);

  if (failed.length === 0) {
    logger.info('PASSED');
    return true;
  }
  logger.info('FAIL');
  return false;
});

module.exports = {
  verifyPassword,
  verifyPasswordWithCurrying
};
