const { findRecentlyRebooted } = require('./machine-scanner2');

describe('v3 findRecentlyRebooted', () => {
  test('given no machines, returns empty results', () => {
    const someDate = new Date(2000, 0, 1);

    const result = findRecentlyRebooted([], 0, () => someDate);

    expect(result.length).toBe(0);
  });

  test('given one machine over the threshold, it is ignored', () => {
    const fromDate = new Date(2000, 0, 3);
    const rebootTwoDaysEarly = new Date(2000, 0, 1);
    const machines = [{ lastBootTime: rebootTwoDaysEarly, name: 'machine1' }];

    const result = findRecentlyRebooted(machines, 1, () => fromDate);

    expect(result.length).toBe(0);
  });

  test('given one of two machines under the threshold, it is found', () => {
    const fromDate = new Date(2000, 0, 3);
    const rebootTwoDaysEarly = new Date(2000, 0, 1);
    const machines = [{ lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
      { lastBootTime: fromDate, name: 'found' }];

    const result = findRecentlyRebooted(machines, 1, () => fromDate);

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });

  test('given one machine less than threshold, returns its name and boot time', () => {
    const fromDate = new Date(2000, 0, 1);
    const machines = [{ lastBootTime: fromDate, name: 'any-name' }];

    const result = findRecentlyRebooted(machines, 1, () => fromDate);

    expect(result.length).toBe(1);
  });
});
