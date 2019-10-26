
describe('findRecentlyRebooted', () => {
  beforeEach(jest.resetModules);

  test('given no machines, returns empty results', () => {
    jest.doMock('./my-data-module', () => ({
      getAllMachines: () => []
    }));
    const { findRecentlyRebooted } = require('../machine-scanner4');

    const someDate = new Date('01 01 2000');
    const result = findRecentlyRebooted(0, someDate);

    expect(result.length).toBe(0);
  });

  test('given one machine over the threshold, it is ignored', () => {
    const fromDate = new Date('01 03 2000');
    const rebootTwoDaysEarly = new Date('01 01 2000');

    jest.doMock('./my-data-module', () => ({
      getAllMachines: () => [
        { lastBootTime: rebootTwoDaysEarly, name: 'machine1' }
      ]
    }));
    const { findRecentlyRebooted } = require('../machine-scanner4');
    const result = findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(0);
  });

  test('given one of two machines under the threshold, it is found', () => {
    const fromDate = new Date('01 03 2000');
    const rebootTwoDaysEarly = new Date('01 01 2000');
    jest.doMock('./my-data-module', () => ({
      getAllMachines: () => [
        { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
        { lastBootTime: fromDate, name: 'found' }
      ]
    }));
    const { findRecentlyRebooted } = require('../machine-scanner4');
    const result = findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });

  test('given 1 machine less than threshold, returns its name and boot time', () => {
    const fromDate = new Date('01 01 2000');

    jest.doMock('./my-data-module', () => ({
      getAllMachines: () => [
        { lastBootTime: fromDate, name: 'any-name' }
      ]
    }));
    const { findRecentlyRebooted } = require('../machine-scanner4');
    const result = findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(1);
  });
});
