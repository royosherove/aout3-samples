const moment = require('moment');

const { findRecentlyRebooted } = require('./machine-scanner0');

describe('findRecentlyRebooted', () => {
  test('given no machines, returns empty results', () => {
    const result = findRecentlyRebooted([], 0);

    expect(result.length).toBe(0);
  });


  test('given one machine over than threhold, it is ignored', () => {
    const twoDaysAgo = moment().subtract(2, 'days');
    const machines = [{ lastBootTime: twoDaysAgo, name: 'machine1' }];

    const result = findRecentlyRebooted(machines, 1);

    expect(result.length).toBe(0);
  });

  test('given one of two machines under the threshold, it is found', () => {
    const twoDaysAgo = moment().subtract(2, 'days').calendar();
    const machines = [
      { lastBootTime: twoDaysAgo, name: 'should-be-ignored' },
      { lastBootTime: Date.now(), name: 'should-be-found' }
    ];

    const result = findRecentlyRebooted(machines, 1);

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('should-be-found');
  });

  test('given one machine less than threhold, returns its name and boot time', () => {
    const machines = [{ lastBootTime: Date.now(), name: 'machine1' }];

    const result = findRecentlyRebooted(machines, 1);

    expect(result.length).toBe(1);
  });
});
