// happens once and globally, has to come first
jest.mock('../../my-data-module', () => ({
  getAllMachines: () => {
    const rebootTwoDaysEarly = new Date(2000, 0, 1);
    const fromDate = new Date(2000, 0, 3);
    return [
      { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
      { lastBootTime: fromDate, name: 'found' }
    ];
  }
}));

const { findRecentlyRebooted } = require('../../machine-scanner4');

describe('findRecentlyRebooted', () => {
  beforeEach(() => jest.resetModules());

  test('given 1 of 2 machines under the threshold, it is found', () => {
    const result = findRecentlyRebooted(1, new Date(2000, 0, 3));

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });
  test('given 1 of 2 machines under the threshold, it is found', () => {
    const result = findRecentlyRebooted(1, new Date(2000, 0, 3));

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });
});
