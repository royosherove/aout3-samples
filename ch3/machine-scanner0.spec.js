const moment = require('moment');

const { findRecentlyRebooted } = require('./machine-scanner0');

describe('findRecentlyRebooted', () => {
  test('given no machines, returns empty results', () => {
    const result = findRecentlyRebooted([], 0);

    expect(result.length).toBe(0);
  });

  test('given one machine over than threshold, it is ignored', () => {
    const twoDaysAgo = moment().subtract(2, 'days');
    const machines = [{ lastBootTime: twoDaysAgo, name: 'machine1' }];

    const result = findRecentlyRebooted(machines, 1);

    expect(result.length).toBe(0);
  });

  test('given one of two machines under the threshold, it is found', () => {
    const twoDaysAgo = moment().subtract(2, 'days');
    const machines = [{ lastBootTime: twoDaysAgo, name: 'ignored' },
      { lastBootTime: Date.now(), name: 'found' }];

    const result = findRecentlyRebooted(machines, 1);

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });

  test('given one machine less than threshold, returns its name and boot time', () => {
    const machines = [{ lastBootTime: Date.now(), name: 'any-name' }];

    const result = findRecentlyRebooted(machines, 1);

    expect(result.length).toBe(1);
  });
});

describe('v0.1 with fake global date', () => {
  test('given one machine less than threshold, returns its name and boot time', () => {
    const fakeTime = new Date('01 01 2000').getTime();
    const realNowFn = Date.now;
    Date.now = () => fakeTime;
    console.log(Date.now()); // always outputs '946677600000'
    const machines = [{ lastBootTime: Date.now(), name: 'any-name' }];

    const result = findRecentlyRebooted(machines, 1);

    expect(result.length).toBe(1);
    Date.now = realNowFn;
    console.log(Date.now()); // dynamically changing output
  });
});

describe('v0.2 with jest fake global date', () => {
  test('given one machine less than threshold, returns its name and boot time', () => {
    const fakeTime = new Date('01 01 2000').getTime();
    const realNowFn = Date.now;
    Date.now = jest.fn(() => fakeTime);
    console.log(Date.now()); // always outputs '946677600000'
    const machines = [{ lastBootTime: Date.now(), name: 'any-name' }];

    const result = findRecentlyRebooted(machines, 1);

    expect(result.length).toBe(1);
    Date.now = realNowFn;
    console.log(Date.now()); // dynamically changing output
  });
});

describe('v0.3 refactored with before& afterEach: with jest fake global date', () => {
  let realNowFn;
  beforeEach(() => {
    realNowFn = Date.now;
  });
  afterEach(() => {
    Date.now = realNowFn;
    console.log(Date.now()); // dynamically changing output
  });

  const fakeGlobalTime = dateObj => {
    //huge issue if running tests in parallel
    Date.now = jest.fn(() => dateObj.getTime());
    console.log(Date.now()); // always outputs '946677600000'
  };

  test('given one machine less than threshold, returns its name and boot time', () => {
    fakeGlobalTime(new Date('01 01 2000'));
    const machines = [{ lastBootTime: Date.now(), name: 'any-name' }];

    const result = findRecentlyRebooted(machines, 1);

    expect(result.length).toBe(1);
  });
});
