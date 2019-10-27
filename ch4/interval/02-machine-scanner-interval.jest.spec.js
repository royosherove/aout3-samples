const {  findRebootedPerInterval } = require('./machine-scanner-interval');


describe('findRebootedPerInterval', () => {
  beforeEach(jest.clearAllTimers);

  test('findRebootedPerInterval, when found, triggers onFound callback', () => {
    //arrange
    const getFakeMachines = ()=> [
      { lastBootTime: new Date('01 01 2000'), name: 'ignored' },
      { lastBootTime: new Date('01 03 2000'), name: 'found' }];
    let found = false;
    jest.useFakeTimers();
    findRebootedPerInterval(getFakeMachines,
                          () =>  found = true ,             //onFound callback
                          2,                                // maxDays
                          () => new Date("01 03 2000"));    //getDate

    //act
    jest.advanceTimersToNextTimer();

    //assert
    expect(found).toEqual(true);
  });
});
