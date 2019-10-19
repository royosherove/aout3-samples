const {  findRebootedPerInterval } = require('./machine-scanner-interval');


describe('findRebootedPerInterval', () => {
  beforeEach(jest.clearAllTimers);

  test('findRebootedPerInterval, when found, triggers onFound callback', () => {
    jest.useFakeTimers();
    const machines = [
      { lastBootTime: new Date('01 01 2000'), name: 'ignored' },
      { lastBootTime: new Date('01 03 2000'), name: 'found' }];
    let found = false;
    findRebootedPerInterval(() => machines,//getMachines
        () =>  found = true ,             //onFound callback
        2,                                // maxDays
        () => new Date("01 03 2000"));    //getDate
    jest.advanceTimersToNextTimer();
    expect(found).toEqual(true);
  });
});
