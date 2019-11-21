const {  findRebootedPerInterval } = require('./machine-scanner-interval');


describe('findRebootedPerInterval', () => {
  beforeEach(()=>jest.clearAllTimers());

  test('findRebootedPerInterval, when found, triggers onFound callback', () => {
    //arrange
    const getFakeMachines = ()=> [
      { lastBootTime: new Date(2000,0,1), name: 'ignored' },
      { lastBootTime: new Date(2000,0,3), name: 'found' }];
    let found = false;
    jest.useFakeTimers();
    findRebootedPerInterval(getFakeMachines,
                          () =>  {
                            found = true;
                            // console.log('FOUND');
                          } ,             //onFound callback

                          2,                                // maxDays
                          () => new Date("01 03 2000"));    //getDate

    //act
    // jest.advanceTimersByTime(1000);
    jest.advanceTimersToNextTimer();

    //assert
    expect(found).toEqual(true);
  });
});
