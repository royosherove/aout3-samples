const moment = require('moment');
const {verifyPassword, verifyPassword2} = require("./password-verifier-time00");
const SUNDAY = 0, SATURDAY = 6, MONDAY = 2;

describe('verifier', () => {
    const TODAY = moment().day();

    //test is always executed, but might not do anything
    test('on weekends, throws exceptions', () => {
        if ([SATURDAY, SUNDAY].includes(TODAY)) {
            expect(()=> verifyPassword('anything',[]))
                .toThrowError("It's the weekend!");
        }
    });

    //test is not even executed on week days
    if ([SATURDAY, SUNDAY].includes(TODAY)) {
        test('on a weekend, throws an error', () => {
            expect(()=> verifyPassword('anything', []))
                .toThrow("It's the weekend!");
        });
    }
});

describe('verifier2', () => {
    test('on weekends, throws exceptions', () => {
        const alwaysSunday = () => SUNDAY;
        expect(()=> verifyPassword2('anything',[], alwaysSunday))
            .toThrowError("It's the weekend!");
    });
    test('on week days, works fine', () => {
        const alwaysMonday = () => MONDAY;

        const result = verifyPassword2('anything', [], alwaysMonday);

        expect(result.length).toBe(0);
    });
});
