const assert = require('assert');
const { check } = require('./custom-test-framework');

const dataModulePath = require.resolve('../my-data-module');

const fakeDataFromModule = fakeData => {
  delete require.cache[dataModulePath];
  require.cache[dataModulePath] = {
    id: dataModulePath,
    filename: dataModulePath,
    loaded: true,
    exports: {
      getAllMachines: () => fakeData
    }
  };
  require(dataModulePath);
};

const requireAndCall_findRecentlyRebooted = (maxDays, fromDate) => {
  const { findRecentlyRebooted } = require('../machine-scanner4');
  return findRecentlyRebooted(maxDays, fromDate);
};

// this test will fail in Jest
// because jest ignores require.cache internally
// It should pass with other test frameworks such as Jasmine
// to run it:
// 'node  ch3/time/04-module-patching/require-cache-patching/machine-scanner4.test-with-require-cache.js'
check('given 1 of 2 machines under the threshold, it is found', () => {
  const rebootTwoDaysEarly = new Date(2000, 0, 1);
  const fromDate = new Date(2000, 0, 3);
  fakeDataFromModule([
    { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
    { lastBootTime: fromDate, name: 'found' }
  ]);

  const result = requireAndCall_findRecentlyRebooted(1, fromDate);
  assert(result.length === 1);
  assert(result[0].name.includes('found'));
});
