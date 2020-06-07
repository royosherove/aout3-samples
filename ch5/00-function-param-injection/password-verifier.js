// this dependency is impossible to fake with traditional injection techniques
const _ = require('lodash');
const log = require('./complicated-logger');

const verifyPassword2 = (input, rules, logger) => {
  const failed = rules
    .map(rule => rule(input))
    .filter(result => result === false);

  if (failed.length === 0) {
    logger.info('PASSED');
    logger.debug('PASSED');
    return true;
  }
  logger.info('FAIL');
  return false;
};
const verifyPassword3 = _.curry((rules, logger, input) => {
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
  verifyPassword2,
  verifyPassword3
};
