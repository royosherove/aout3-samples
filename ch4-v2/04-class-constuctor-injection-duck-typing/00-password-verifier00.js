class PasswordVerifier {
  _rules;
  _logger;

  constructor(rules, logger) {
    this._rules = rules;
    this._logger = logger;
  }

  verify(input) {
    const failed = this._rules
        .map(rule => rule(input))
        .filter(result => result === false);

    console.log(failed);
    if (failed.length === 0) {
      this._logger.info('PASSED');
      return true;
    }
    this._logger.info('FAIL');
    return false;
  }
}

module.exports = {
  PasswordVerifier
};
