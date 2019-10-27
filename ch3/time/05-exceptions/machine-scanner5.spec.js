const dataModule = require('./my-data-module');
const { findRecentlyRebooted } = require('./machine-scanner5');

// has to live up here
jest.mock('./my-data-module');

describe('findRecentlyRebooted', () => {
  beforeEach(()=>jest.resetAllMocks());

  test('given an exception from the fake module, returns empty result', () => {
    dataModule.getAllMachines.mockImplementation(() => {
      throw 'fake error'
    });
    const someDate = new Date('01 01 2000');

    const result = findRecentlyRebooted(0, someDate);

    expect(result.length).toBe(0);
  });

});
