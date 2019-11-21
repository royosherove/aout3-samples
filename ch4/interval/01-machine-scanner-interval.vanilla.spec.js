const {findRebootedPerInterval } = require('./machine-scanner-interval');

const originalSetInterval = setInterval;
const restoreSetInterval = () => {
  setInterval = originalSetInterval;
};

const fakeSetInterval = () => {
  //will only execute the callback once
  setInterval = (callback,ms) => callback();
};


describe('findRebootedPerInterval', () => {
  beforeEach(restoreSetInterval);

  test('findRebootedPerInterval, when found, triggers onFound callback', () => {
    fakeSetInterval();
    const machines = [
        { lastBootTime: new Date(2000,0,1), name: 'ignored' },
        { lastBootTime: new Date(2000,0,3), name: 'found' }];

    let found = false;

    findRebootedPerInterval(() => machines,            //getMachines
                        () =>  found = true ,         //onFound callback
                        2,                            // maxDays
                        () => new Date("01 03 2000"));//getDate
    expect(found).toEqual(true);
  });
});
