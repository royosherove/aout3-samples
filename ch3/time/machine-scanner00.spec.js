const { findRecentlyRebooted } = require('./machine-scanner00');

describe('findRecentlyRebooted', () => {
  test('given no machines, returns empty results', () => {
    const result = findRecentlyRebooted([], 0);

    expect(result.length).toBe(0);
  });

  test('given one machine over than threshold, it is ignored', () => {
    const twoDaysAgo = new Date().getDate() - 2;
    const machines = [{lastBootTime: twoDaysAgo, name: 'machine1'}];

    const result = findRecentlyRebooted(machines, 1);

    expect(result.length).toBe(0);
  });
});
