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

    test('fake timeout with await v1', done => {
        Samples.calculate3(1, 2).then(
            result => expect(result).toBe(3) & done());
        // jest.advanceTimersToNextTimer(); is not needed
    });

    test('fake timeout with await', async() => {
        const result = await Samples.calculate3(1, 2);
        expect(result).toBe(3)
        // done() is not needed
        // jest.advanceTimersToNextTimer(); is not needed
    });
});
