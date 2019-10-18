const daysFrom = (from, to) => {
  const ms = from.getTime() - new Date(to).getTime();
  return (ms / 1000) / 60 / 60 / 24; // secs * min * hrs
};

const findRecentlyRebooted = (machines, maxDays, fromDate) =>
  machines.filter(machine =>
    daysFrom(fromDate, machine.lastBootTime) < maxDays);

module.exports = {
  findRecentlyRebooted
};
