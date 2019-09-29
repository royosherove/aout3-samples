const moment = require('moment');

const daysFrom = (to) => moment().diff(to, 'days');

const findRecentlyRebooted = (machines, maxDays) =>
  machines.filter(machine =>
    daysFrom(machine.lastBootTime) < maxDays);

module.exports = {
  findRecentlyRebooted
};
