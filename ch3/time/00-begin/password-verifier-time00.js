const moment = require('moment');
const SUNDAY = 0, SATURDAY = 6;
const verifyPassword = (input, rules) => {
    const dayOfWeek = moment().day();
    if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
        throw Error("It's the weekend!");
    }
    const errors = [];
    rules.forEach(rule => {
        const result = rule(input);
        if (!result.passed) {
            errors.push(`error ${result.reason}`);
        }
    });
    return errors;
};

module.exports = {
    verifyPassword
};
