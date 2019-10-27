const dataModule = require('../my-data-module');
const { findRecentlyRebooted } = require('../machine-scanner4');

const fakeDataFromModule = (fakeData) =>
    dataModule.getAllMachines.mockImplementation(() => fakeData);


// has to live up here
jest.mock('../my-data-module');

describe('findRecentlyRebooted', () => {
  beforeEach(jest.resetAllMocks); //<- the cleanest way
    // jest.resetModules();
    // jest.restoreAllMocks();
    // jest.clearAllMocks();
  // } );

  test('given no machines, returns empty results', () => {
    fakeDataFromModule([]);
    const someDate = new Date('01 01 2000');

    const result = findRecentlyRebooted(0, someDate);

    expect(result.length).toBe(0);
  });

  test('given one machine over the threshold, it is ignored', () => {
    const fromDate = new Date('01 03 2000');
    const rebootTwoDaysEarly = new Date('01 01 2000');
    fakeDataFromModule([
      { lastBootTime: rebootTwoDaysEarly, name: 'machine1' }
    ]);

    const result = findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(0);
  });

  test('given one of two machines under the threshold, it is found', () => {
    const fromDate = new Date('01 03 2000');
    const rebootTwoDaysEarly = new Date('01 01 2000');
    fakeDataFromModule([
      { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
      { lastBootTime: fromDate, name: 'found' }
    ]);
    const result = findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });

  test('given 1 machine less than threshold, returns its name and boot time', () => {
    const fromDate = new Date('01 01 2000');
    fakeDataFromModule([
      { lastBootTime: fromDate, name: 'any-name' }
    ]);

    const result = findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(1);
  });
  test('given 1 of 2 machines under the threshold, it is found', () => {
    const rebootTwoDaysEarly = new Date('01 01 2000');
    const fromDate = new Date('01 03 2000');
    fakeDataFromModule([
      {lastBootTime: rebootTwoDaysEarly, name: 'ignored'},
      {lastBootTime: fromDate, name: 'found'}
    ]);
    const result = findRecentlyRebooted(1, new Date('01 03 2000'));

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });
  test('given 1 of 2 machines under the threshold, it is found', () => {
    const rebootTwoDaysEarly = new Date('01 01 2000');
    const fromDate = new Date('01 03 2000');
    fakeDataFromModule([
      {lastBootTime: rebootTwoDaysEarly, name: 'ignored'},
      {lastBootTime: fromDate, name: 'found'}
    ]);
    const result = findRecentlyRebooted(1, new Date('01 03 2000'));

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });
});
