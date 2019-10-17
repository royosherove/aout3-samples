const {getAllMachines} = require('./my-data-module');

const daysFrom = (from, to) => {
  const ms = from.getTime() - new Date(to).getTime();
  return (ms / 1000) * 60 * 60 * 24; // secs * min * hrs
};

const findRecentlyRebooted = (maxDays, fromDate) => {
  const machines = getAllMachines();
  return machines.filter(machine =>
      daysFrom(fromDate, machine.lastBootTime) < maxDays);
};

module.exports = {
  findRecentlyRebooted
};
