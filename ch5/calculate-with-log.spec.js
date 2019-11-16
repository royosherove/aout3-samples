const {calculate} = require('./calculate-with-log');

describe('calculate', () => {
    describe('given two numbers', () => {
        it('sums them up', () => {
            const result = calculate(1, 2, jest.fn());
            expect(result).toBe(3);
        });

        it('calls the logger with sum', () => {
            const logger = jest.fn();
            const result = calculate(1, 2, logger);
            expect(logger.mock.calls.length).toBe(1);
        });
    });
});

