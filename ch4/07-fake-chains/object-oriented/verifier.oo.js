const {getConfig} = require('../global-config');

class PasswordVerifier {
    _rules;
    _logger;

    constructor(rules, getConfigFn) {
        this._rules = rules;
        this._logger = getConfigFn().log;
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
