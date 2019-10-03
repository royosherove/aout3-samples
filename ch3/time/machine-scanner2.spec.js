
const { findRecentlyRebooted } = require('./machine-scanner2');

describe('v3 findRecentlyRebooted', () => {
  test('given no machines, returns empty results', () => {
    const someDate = new Date('01 01 2000');

    const result = findRecentlyRebooted([], 0, someDate);

    expect(result.length).toBe(0);
  });

  test('given one machine over the threshold, it is ignored', () => {
    const fromDate = new Date('01 03 2000');
    const rebootTwoDaysEarly = new Date('01 01 2000');
    const machines = [{ lastBootTime: rebootTwoDaysEarly, name: 'machine1' }];

    const result = findRecentlyRebooted(machines, 1, () => fromDate);

    expect(result.length).toBe(0);
  });

  test('given one of two machines under the threshold, it is found', () => {
    const fromDate = new Date('01 03 2000');
    const rebootTwoDaysEarly = new Date('01 01 2000');
    const machines = [{ lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
      { lastBootTime: fromDate, name: 'found' }];

    //using a callback that fethes our hardcoded date
    ///WHAT HAPPENS when you want to control date on multipel components or functions at same time
    // and you forget one?
    //is it OK to make the value a default value?
    const result = findRecentlyRebooted(machines, 1, () => fromDate);

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });

  test('given one machine less than threshold, returns its name and boot time', () => {
    const fromDate = new Date('01 01 2000');
    const machines = [{ lastBootTime: fromDate, name: 'any-name' }];

    const result = findRecentlyRebooted(machines, 1, () => fromDate);

    expect(result.length).toBe(1);
  });
});
