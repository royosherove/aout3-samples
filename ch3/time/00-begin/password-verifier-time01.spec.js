const {MONDAY} = require("./password-verifier-time01");
const {PasswordVerifier} = require("./password-verifier-time01");
const {Verifier} = require("./password-verifier-time01");
const {makeVerifier, SUNDAY} = require("./password-verifier-time01");

describe('verifier', () => {
    test('on weekends, throws exceptions', () => {
        const alwaysSunday = () => SUNDAY;
        const verifyPassword = makeVerifier([], alwaysSunday);

        expect(()=> verifyPassword('anything'))
            .toThrow("It's the weekend!");
    });

    test('on weekends, throws exceptions, ctor function', () => {
        const alwaysSunday = () => SUNDAY;
        const verifier = new Verifier([], alwaysSunday);

        expect(()=> verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });

    test('on weekends, throws exceptions, ctor function', () => {
        const alwaysSunday = () => SUNDAY;
        const verifier = new PasswordVerifier([], alwaysSunday);

        expect(()=> verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });

    test('on weekdays, with no rules, always passes', () => {
        const alwaysMonday = () => MONDAY;
        const verifier = new PasswordVerifier([], alwaysMonday);

        const result = verifier.verify('anything');
        expect(result.length).toBe(0);
    });
});
