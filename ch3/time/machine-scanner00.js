const daysFrom = (to) => {
  const ms = Date.now() - new Date(to).getTime();
  return (ms / 1000) * 60 * 60 * 24; // secs * min * hrs
};

const findRecentlyRebooted = (machines, maxDays) =>
  machines.filter(machine =>
    daysFrom(machine.lastBootTime) < maxDays);

module.exports = {
  findRecentlyRebooted
};
