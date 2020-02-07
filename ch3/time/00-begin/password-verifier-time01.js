const moment = require('moment');
const SUNDAY = 0, MONDAY=1, TUESDAY=2, WEDNESDAY=3,THURSDAY=4,FRIDAY=5, SATURDAY = 6;

// higher order function pattern
const makeVerifier = (rules, dayOfWeekFn) => {
    return function (input) {
        if ([SATURDAY, SUNDAY].includes(dayOfWeekFn())) {
            throw new Error("It's the weekend!");
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
};

// constructor function pattern
const Verifier = function(rules, dayOfWeekFn)
{
    this.verify = function (input) {
        if ([SATURDAY, SUNDAY].includes(dayOfWeekFn())) {
            throw new Error("It's the weekend!");
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
};


//class with constructor injection pattern
class PasswordVerifier {
    constructor(rules, dayOfWeekFn) {
        this.rules = rules;
        this.dayOfWeek = dayOfWeekFn;
    }

    verify(input) {
        if ([SATURDAY, SUNDAY].includes(this.dayOfWeek())) {
            throw new Error("It's the weekend!");
        }
        const errors = [];
        this.rules.forEach(rule => {
            const result = rule(input);
            if (!result.passed) {
                errors.push(`error ${result.reason}`);
            }
        });
        return errors;
    };
}





module.exports = {
    //just to help remove some duplication from the tests
    SUNDAY, MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY, SATURDAY,
    //higher order function pattern injection
    makeVerifier,
    //constructor function injection
    Verifier,

    //class with constructor injection pattern
    PasswordVerifier
};
