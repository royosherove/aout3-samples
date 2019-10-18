const { findRecentlyRebooted } = require('./machine-scanner4');

//happens once and globally
jest.mock('./my-data-module', () => ({
  getAllMachines: () => {
    const rebootTwoDaysEarly = new Date("01 01 2000");
    const fromDate = new Date("01 03 2000");
    return [
      {lastBootTime: rebootTwoDaysEarly, name: 'ignored'},
      {lastBootTime: fromDate, name: 'found'}
    ];
  }
}));

describe('findRecentlyRebooted', () => {

  test('given 1 of 2 machines under the threshold, it is found', () => {
    const result = findRecentlyRebooted(1, new Date("01 03 2000"));

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });
  test('given 1 of 2 machines under the threshold, it is found', () => {
    const result = findRecentlyRebooted(1, new Date("01 03 2000"));

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });
});
