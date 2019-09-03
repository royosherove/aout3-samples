const verifyPassword = (input, rules) => {
    const errors = [];
    rules.forEach(rule => {
        const result = rule(input);
        if (result.passed === false) {
            errors.push(result.reason);
        }
    });
    return errors;
};
module.exports = verifyPassword;

