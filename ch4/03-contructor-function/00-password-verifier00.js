function PasswordVerifier(rules, logger) {
    this.verify = function verify(input) {
        const failed = rules
            .map(rule => rule(input))
            .filter(result => result === false);

        console.log(failed);
        if (failed.length === 0) {
            logger.info('PASSED');
            return true;
        }
        logger.info('FAIL');
        return false;
    };
};


module.exports = {
  PasswordVerifier
};
