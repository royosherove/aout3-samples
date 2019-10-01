const moment = require('moment');

const daysFrom = (from, to) => moment(from).diff(to, 'days');

const findRebootedPerInterval = (getMachinesCallback, foundCallback, intervalSeconds, maxDays, dateCallback) => {
  setInterval(function () {
    console.log('IN INTERVAL');
    const rebootsFound = findRecentlyRebooted(getMachinesCallback(), maxDays, dateCallback);
    if (rebootsFound.length > 0) {
      foundCallback(rebootsFound);
    }
  }, intervalSeconds)
};

const findRecentlyRebooted = (machines, maxDays, fromDateCallback = Date.now) =>
  machines.filter(machine =>
    daysFrom(fromDateCallback(), machine.lastBootTime) < maxDays);

module.exports = {
  findRecentlyRebooted,
  findRebootedPerInterval
};
