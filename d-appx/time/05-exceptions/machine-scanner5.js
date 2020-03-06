const { getAllMachines } = require('./my-data-module');

const daysFrom = (from, to) => {
  const ms = from.getTime() - new Date(to).getTime();
  const diff = (ms / 1000) / 60 / 60 / 24; // secs * min * hrs
  // console.log(diff);
  return diff;
};

const findRecentlyRebooted = (maxDays, fromDate) => {
  try {
    const machines = getAllMachines();
    return machines.filter(machine => {
      const daysDiff = daysFrom(fromDate, machine.lastBootTime);
      console.log(`${daysDiff} vs ${maxDays}`);
      return daysDiff < maxDays;
    });
  } catch (e) {
    return [];
  }
};

module.exports = {
  findRecentlyRebooted
};
