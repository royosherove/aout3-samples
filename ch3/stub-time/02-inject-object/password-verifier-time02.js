const SUNDAY = 0, MONDAY=1, TUESDAY=2, WEDNESDAY=3,THURSDAY=4,FRIDAY=5, SATURDAY = 6;

// factory-higher order function pattern
const makeVerifier = (rules, timeProvider) => {
    return function (input) {
        if ([SATURDAY, SUNDAY].includes(timeProvider.getDay())) {
            throw new Error("It's the weekend!");
        }
        //more code goes here..
    };
};

// constructor function pattern
const Verifier = function(rules, timeProvider)
{
    this.verify = function (input) {
        if ([SATURDAY, SUNDAY].includes(timeProvider.getDay())) {
            throw new Error("It's the weekend!");
        }
        //more code goes here..
    };
};


//class with constructor injection pattern
class PasswordVerifier {
    constructor(rules, timeProvider) {
        this.rules = rules;
        this.timeProvider = timeProvider;
    }

    verify(input) {
        if ([SATURDAY, SUNDAY].includes(this.timeProvider.getDay())) {
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
