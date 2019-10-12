const { findRecentlyRebooted } = require('./machine-scanner00');

describe('v1 findRecentlyRebooted', () => {
  test('given 1 of 2 machines under threshold, it is found', () => {
    const originalNow = Date.now;
    const fromDate = new Date('01 03 2000');
    Date.now = () => fromDate.getTime();

    const rebootTwoDaysEarly = new Date('01 01 2000');
    const machines = [
      { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
      { lastBootTime: fromDate, name: 'found' }];

    const result = findRecentlyRebooted(machines, 1, fromDate);

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');

    Date.now = originalNow;
  });
});

describe('v2 findRecentlyRebooted', () => {
  let originalNow = Date.now;
  beforeEach(() => originalNow = Date.now);
  afterEach(() => Date.now = originalNow);

  test('given 1 of 2 machines under threshold, it is found', () => {
    const fromDate = new Date('01 03 2000');
    Date.now = () => fromDate.getTime();

    const rebootTwoDaysEarly = new Date('01 01 2000');
    const machines = [
      { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
      { lastBootTime: fromDate, name: 'found' }];

    const result = findRecentlyRebooted(machines, 1, fromDate);

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });
});
