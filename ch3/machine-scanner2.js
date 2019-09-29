const moment = require('moment');

const daysFrom = (from, to) => moment(from).diff(to, 'days');

const findRecentlyRebooted = (machines, maxDays, fromDateCallback = Date.now) =>
  machines.filter(machine =>
    daysFrom(fromDateCallback(), machine.lastBootTime) < maxDays);

module.exports = {
  findRecentlyRebooted
};
