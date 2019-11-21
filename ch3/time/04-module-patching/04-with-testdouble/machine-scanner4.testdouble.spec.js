let td;

const resetAndRequireModules = () => {
  jest.resetModules();
  td = require('testdouble');
  require('testdouble-jest')(td, jest);
};

const fakeDataFromModule = fakeData => {
  td.replace('../my-data-module', {
    getAllMachines: () => fakeData
  });
};

const requireAndCall_findRecentlyRebooted = (maxDays, fromDate) => {
  const { findRecentlyRebooted } = require('../machine-scanner4');
  return findRecentlyRebooted(maxDays, fromDate);
};

describe('4 findRecentlyRebooted', () => {
  beforeEach(resetAndRequireModules);

  test('given no machines, returns empty results', () => {
    const someDate = new Date(2000,0,1);
    fakeDataFromModule([]);

    const result = requireAndCall_findRecentlyRebooted(1, someDate);
    expect(result.length).toBe(0);
  });

  test('given one machine over the threshold, it is ignored', () => {
    const fromDate = new Date(2000,0,3);
    const rebootTwoDaysEarly = new Date(2000,0,1);
    fakeDataFromModule([
      { lastBootTime: rebootTwoDaysEarly, name: 'machine1' }
    ]);

    const result = requireAndCall_findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(0);
  });

  test('given one of two machines under the threshold, it is found', () => {
    const fromDate = new Date(2000,0,3);
    const rebootTwoDaysEarly = new Date(2000,0,1);
    fakeDataFromModule([
      { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
      { lastBootTime: fromDate, name: 'found' }
    ]);

    const result = requireAndCall_findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });

  test('given 1 machine less than threshold, returns its name and boot time', () => {
    const fromDate = new Date(2000,0,1);
    fakeDataFromModule([
      { lastBootTime: fromDate, name: 'any-name' }
    ]);

    const result = requireAndCall_findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(1);
  });
});
