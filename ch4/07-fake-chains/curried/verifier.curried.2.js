const _ = require('lodash');

const verifyPasswordCurried = _.curry((rules, loggerAdapter, input) => {
  const failed = rules
    .map(rule => rule(input))
    .filter(result => result === false);

  if (failed.length === 0) {
    loggerAdapter.info('PASSED'); // <- api chain
    return true;
  }
  loggerAdapter.info('FAIL'); // <- api chain
  return false;
});

module.exports = {
  verifyPasswordCurried
};
