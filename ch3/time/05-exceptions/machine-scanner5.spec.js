// has to live up here
jest.mock('./my-data-module');

const dataModule = require('./my-data-module');
const { findRecentlyRebooted } = require('./machine-scanner5');


describe('findRecentlyRebooted', () => {
  beforeEach(()=>jest.resetAllMocks());

  test('given an exception from the fake module, returns empty result', () => {
    dataModule.getAllMachines.mockImplementation(() => {
      throw new Error('fake error');
    });
    const someDate = new Date(2000,0,1);

    const result = findRecentlyRebooted(0, someDate);

    expect(result.length).toBe(0);
  });

});
