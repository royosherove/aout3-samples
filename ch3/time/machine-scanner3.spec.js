const { machineScanner } = require('./machine-scanner3');
describe('machineScanner', () => {
  describe('findRecentlyRebooted', () => {
    test('given one of two machines under the threshold, it is found', () => {
      const fromDate = new Date('01 03 2000');
      const scanner = new machineScanner(fromDate);
      const rebootTwoDaysEarly = new Date('01 01 2000');
      const machines = [{ lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
        { lastBootTime: fromDate, name: 'found' }];

      const result = scanner.findRecentlyRebooted(machines, 1);

      expect(result.length).toBe(1);
      expect(result[0].name).toContain('found');
    });
  });
});
