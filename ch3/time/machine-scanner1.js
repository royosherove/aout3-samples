const moment = require('moment');

const daysFrom = (from, to) => moment(from).diff(to, 'days');

const findRecentlyRebooted = (machines, maxDays, fromDate) =>
    machines.filter(machine =>
        daysFrom(fromDate, machine.lastBootTime) < maxDays);

module.exports = {
  findRecentlyRebooted
};
