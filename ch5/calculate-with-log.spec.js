const Samples =  require('./calculate-with-log');

describe('calculate', () => {
    describe('given two numbers', () => {
        it('sums them up', () => {
            const result = Samples.calculate(1, 2,
                                            jest.fn());
            expect(result).toBe(3);
        });

        it('calls the logger with sum', () => {
            const logger = jest.fn();

            const result = Samples.calculate(1, 2, logger);

            expect(logger.mock.calls.length).toBe(1);
            expect(logger.mock.calls[0][0]).toBe(3);
        });
    });
});
describe('calculate2', () => {
    describe('given two numbers', () => {
        it('sums them up', () => {
            const result = Samples.calculate2(1, 2, {log:jest.fn()});
            expect(result).toBe(3);
        });

        it('calls the logger with sum', () => {
            const mockLogger = {log: jest.fn()}

            Samples.calculate2(1, 2, mockLogger);

            expect(mockLogger.log.mock.calls.length).toBe(1);
        });
    });
});

