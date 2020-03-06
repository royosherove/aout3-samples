const sinon = require('sinon');
let dataModule;

const fakeDataFromModule = fakeData => {
  sinon.stub(dataModule, 'getAllMachines')
    .returns(fakeData);
};

const resetAndRequireModules = () => {
  jest.resetModules();
  dataModule = require('../my-data-module');
};

const requireAndCall_findRecentlyRebooted = (maxDays, someDate) => {
  const { findRecentlyRebooted } = require('../machine-scanner4');
  return findRecentlyRebooted(maxDays, someDate);
};

describe('4  sinon sandbox findRecentlyRebooted', () => {
  beforeEach(() => resetAndRequireModules());

  test('given no machines, returns empty results', () => {
    const someDate = new Date(2000, 0, 1);
    fakeDataFromModule([]);

    const result = requireAndCall_findRecentlyRebooted(2, someDate);

    expect(result.length).toBe(0);
  });

  test('given one machine over the threshold, it is ignored', () => {
    const fromDate = new Date(2000, 0, 3);
    const rebootTwoDaysEarly = new Date(2000, 0, 1);
    fakeDataFromModule([
      { lastBootTime: rebootTwoDaysEarly, name: 'machine1' }
    ]);

    const result = requireAndCall_findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(0);
  });

  test('given one of two machines under the threshold, it is found', () => {
    const fromDate = new Date(2000, 0, 3);
    const rebootTwoDaysEarly = new Date(2000, 0, 1);
    fakeDataFromModule([
      { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
      { lastBootTime: fromDate, name: 'found' }
    ]);

    const result = requireAndCall_findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });

  test('given 1 machine less than threshold, returns its name and boot time', () => {
    const fromDate = new Date('01-02-2000');
    fakeDataFromModule([
      { lastBootTime: new Date(2000, 0, 1), name: 'any-name' }
    ]);

    const result = requireAndCall_findRecentlyRebooted(2, fromDate);

    expect(result.length).toBe(1);
  });
});
