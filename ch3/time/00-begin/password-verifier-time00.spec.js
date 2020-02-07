const moment = require('moment');
const {verifyPassword} = require("./password-verifier-time00");
const SUNDAY = 0, SATURDAY = 6;

describe('verifier', () => {
    const TODAY = moment().day();

    //test is always executed, but might not do anything
    test('on weekends, throws exceptions', () => {
        if ([SATURDAY, SUNDAY].includes(TODAY)) {
            expect(verifyPassword('anything',[]))
                .toThrowError(Error("It's the weekend, let me rest"));
        }
    });

    //test is not even executed on week days
    if ([SATURDAY, SUNDAY].includes(TODAY)) {
        test('on a weekend, throws an error', () => {
            expect(verifyPassword('anything', []))
                .toThrowError(Error("It's the weekend, let me rest"));
        });
    }
});
