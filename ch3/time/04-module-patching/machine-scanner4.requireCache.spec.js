const dataModulePath = require.resolve('./my-data-module');
 ;

const overrideDataModule = fakeData => {
  delete require.cache[dataModulePath];
  const scannerModule = require('./machine-scanner4');
  scannerModule.require.cache[dataModulePath] = {
    id: dataModulePath,
    filename: dataModulePath,
    loaded: false,
    exports: {
      getAllMachines: () => fakeData,
    }
  }
};



describe('findRecentlyRebooted', () => {
  beforeEach(() => delete require.cache[dataModulePath]);

  test('given 1 of 2 machines under the threshold, it is found', () => {
    const rebootTwoDaysEarly = new Date("01 01 2000");
    const fromDate = new Date("01 03 2000");
    overrideDataModule([
      {lastBootTime: rebootTwoDaysEarly, name: 'ignored'},
      {lastBootTime: fromDate, name: 'found'}
    ]);
    console.log(require.cache);
    const { findRecentlyRebooted } = require('./machine-scanner4');
    console.log(require.cache);
    const result = findRecentlyRebooted(1, new Date("01 03 2000"));

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });

  test('given 1 of 2 machines under the threshold, it is found', () => {
    const result = findRecentlyRebooted(1, new Date("01 03 2000"));

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });
});
