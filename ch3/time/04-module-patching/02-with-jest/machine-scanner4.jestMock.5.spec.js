//          Before-Arrange-Act Module patching
//          ----------------------------------
// Before:   Clear all modules (under test and fake)
// Arrange:  Fake module
// Act:      Re-Require & call unit of work under test before calling it

const fakeDataFromModule = fakeData => {
  jest.doMock('./my-data-module', () => ({
    getAllMachines: () => fakeData
  }));
};

const requireAndCall_findRecentlyRebooted = (maxDays, fromDate) => {
  const { findRecentlyRebooted } = require('../machine-scanner4');
  return findRecentlyRebooted(maxDays, fromDate);
};

describe('findRecentlyRebooted', () => {
  beforeEach(jest.resetModules);

  test('given no machines, returns empty results', () => {
    fakeDataFromModule([]);
    const someDate = new Date('01 01 2000');

    const result = requireAndCall_findRecentlyRebooted(0, someDate);

    expect(result.length).toBe(0);
  });

  test('given one machine over the threshold, it is ignored', () => {
    const fromDate = new Date('01 03 2000');
    const rebootTwoDaysEarly = new Date('01 01 2000');
    fakeDataFromModule([
      { lastBootTime: rebootTwoDaysEarly, name: 'machine1' }
    ]);

    const result = requireAndCall_findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(0);
  });

  test('given one of two machines under the threshold, it is found', () => {
    const fromDate = new Date('01 03 2000');
    const rebootTwoDaysEarly = new Date('01 01 2000');
    fakeDataFromModule([
      { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
      { lastBootTime: fromDate, name: 'found' }
    ]);
    const result = requireAndCall_findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });

  test('given 1 machine less than threshold, returns its name and boot time', () => {
    const fromDate = new Date('01 01 2000');
    fakeDataFromModule([
      { lastBootTime: fromDate, name: 'any-name' }
    ]);

    const result = requireAndCall_findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(1);
  });
});
