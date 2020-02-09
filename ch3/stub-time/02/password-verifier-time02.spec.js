const {SUNDAY, MONDAY} = require("./password-verifier-time02");
//factory method demo
const {makeVerifier} = require("./password-verifier-time02");
//constructor function demo
const {Verifier} = require("./password-verifier-time02");
//class constructor demo
const {PasswordVerifier} = require("./password-verifier-time02");


function FakeTimeProvider(fakeDay) {
    this.getDay = function () {
        return fakeDay;
    }
}

describe('verifier', () => {
    test('factory method: on weekends, throws exceptions', () => {
        const verifyPassword = makeVerifier([], new FakeTimeProvider(SUNDAY));

        expect(()=> verifyPassword('anything'))
            .toThrow("It's the weekend!");
    });

    test('constructor function: on weekends, throws exceptions, ctor function', () => {
        const verifier = new Verifier([], new FakeTimeProvider(SUNDAY));

        expect(()=> verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });

    test('class constructor: on weekends, throws exceptions, ctor function', () => {
        const verifier = new PasswordVerifier([], new FakeTimeProvider(SUNDAY));

        expect(()=> verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });

    test('class constructor: on weekdays, with no rules, always passes', () => {
        const verifier = new PasswordVerifier([], new FakeTimeProvider(MONDAY));

        const result = verifier.verify('anything');
        expect(result.length).toBe(0);
    });

    describe('refactored with constructor', () => {
        const makeVerifier = (rules, timeProvider) => {
            return new PasswordVerifier(rules, timeProvider);
        };

        test('class constructor: on weekends, throws exceptions, ctor function', () => {
            const verifier = makeVerifier([],new FakeTimeProvider(SUNDAY));

            expect(()=> verifier.verify('anything'))
                .toThrow("It's the weekend!");
        });

        test('class constructor: on weekdays, with no rules, always passes', () => {
            const verifier = makeVerifier([],new FakeTimeProvider(MONDAY));

            const result = verifier.verify('anything');
            expect(result.length).toBe(0);
        });
    });
});
