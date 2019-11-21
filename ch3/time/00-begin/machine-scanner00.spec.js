const { findRecentlyRebooted } = require('./machine-scanner00');

describe('findRecentlyRebooted', () => {
  test('given no machines, returns empty results', () => {
    const result = findRecentlyRebooted([], 0);

    expect(result.length).toBe(0);
  });

  test('given one machine over the threshold, it is ignored', () => {
    const twoDaysAgo = Date.now() - (2 * 1000 * 60 * 60 * 24);
    const machines = [{ lastBootTime: twoDaysAgo, name: 'machine1' }];

    const result = findRecentlyRebooted(machines, 1);

    expect(result.length).toBe(0);
  });
});
