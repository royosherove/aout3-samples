const moment = require('moment');

const daysFrom = (to) => moment().diff(moment(to), 'days');

const findRecentlyRebooted = (machines, maxDays) =>
  machines.filter(machine =>
    daysFrom(machine.lastBootTime) < maxDays);

module.exports = {
  findRecentlyRebooted
};
