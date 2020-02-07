const SUNDAY = 0, MONDAY=1, TUESDAY=2, WEDNESDAY=3,THURSDAY=4,FRIDAY=5, SATURDAY = 6;

// factory-higher order function pattern
const makeVerifier = (rules, dayOfWeekFn) => {
    return function (input) {
        if ([SATURDAY, SUNDAY].includes(dayOfWeekFn())) {
            throw new Error("It's the weekend!");
        }
        //more code goes here..
    };
};

// constructor function pattern
const Verifier = function(rules, dayOfWeekFn)
{
    this.verify = function (input) {
        if ([SATURDAY, SUNDAY].includes(dayOfWeekFn())) {
            throw new Error("It's the weekend!");
        }
        //more code goes here..
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
        //more code goes here..
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
