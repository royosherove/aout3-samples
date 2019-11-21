const daysFrom = (from, to) => {
  const ms = from.getTime() - new Date(to).getTime();
  return (ms / 1000) / 60 / 60 / 24; // secs * min * hrs
};

const configureFinder = (fromDateCallback = Date.now) =>
    (machines, maxDays) =>
        machines.filter(machine =>
            daysFrom(fromDateCallback(), machine.lastBootTime) < maxDays);

module.exports = {
  configureFinder
};
