const Samples = require('./async-samples');

describe('calculate1 - callbacks', () => {
    beforeEach(jest.clearAllTimers);
    test('fake timeout with callback', done => {
        jest.useFakeTimers();
        Samples.calculate1(1, 2,
            result => expect(result).toBe(3) & done());
        jest.advanceTimersToNextTimer();
    });
});
describe('calculate2 - Promises', () => {
    beforeEach(jest.clearAllTimers);
    beforeEach(jest.useFakeTimers);

    test('fake timeout with Promise', done => {
        Samples.calculate2(1, 2).then(
            result =>  expect(result).toBe(3) & done());
        jest.advanceTimersToNextTimer();
    });
});
describe('calculate3 - Await', () => {
    beforeEach(jest.clearAllTimers);
    beforeEach(jest.useFakeTimers);

    test('fake timeout with Promise', done => {
        Samples.calculate3(1, 2).then(
            result =>  expect(result).toBe(3) & done());
                                                    // ^ done() is still needed
        // this is not needed anymore
        // jest.advanceTimersToNextTimer();
    });
});
