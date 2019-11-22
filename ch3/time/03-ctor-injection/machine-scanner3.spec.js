const { MachineScanner } = require('./machine-scanner3');
describe('machineScanner', () => {
  describe('findRecentlyRebooted', () => {
    test('given 1 of 2 machines under the threshold, it is found', () => {
      const fromDate = new Date(2000,0,3);
      const scanner = new MachineScanner(fromDate);
      const rebootTwoDaysEarly = new Date(2000,0,1);
      const machines = [
        { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
        { lastBootTime: fromDate, name: 'found' }];

      const result = scanner.findRecentlyRebooted(machines, 1);

      expect(result.length).toBe(1);
      expect(result[0].name).toContain('found');
    });
  });
});

const makeScanner = date => new MachineScanner(date);

describe('v2 machineScanner', () => {
  describe('findRecentlyRebooted', () => {
    test('given 1 of 2 machines under the threshold, it is found', () => {
      const fromDate = new Date(2000,0,3);
      const scanner = makeScanner(fromDate);
      const rebootTwoDaysEarly = new Date(2000,0,1);
      const machines = [
        { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
        { lastBootTime: fromDate, name: 'found' }];

      const result = scanner.findRecentlyRebooted(machines, 1);

      expect(result.length).toBe(1);
      expect(result[0].name).toContain('found');
    });
  });
});
