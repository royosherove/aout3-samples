const originalDependencies = {
    configFn: require('../global-config')
};

let dependencies = {...originalDependencies};

const inject = (fakes) => {
    Object.assign(dependencies, fakes);
    return function reset() {
        dependencies = {...originalDependencies};
    }
};

const verifyPasswordModular = (rules, input) => {
    const failed = rules
        .map(rule => rule(input))
        .filter(result => result === false);

    if (failed.length === 0) {
        dependencies.configFn().logger.info('PASSED');
        return true;
    }
    dependencies.configFn().logger.info('FAIL');
    return false;
};

module.exports = {
    verifyPasswordModular,
    inject
};
