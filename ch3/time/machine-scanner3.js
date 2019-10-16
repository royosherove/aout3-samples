class machineScanner {
  constructor (currentDate) {
    this.date = currentDate;
  }

  daysFrom (from, to) {
    const ms = from.getTime() - new Date(to).getTime();
    return (ms / 1000) * 60 * 60 * 24; // secs * min * hrs
  }

  findRecentlyRebooted (machines, maxDays) {
    return machines.filter(machine =>
      this.daysFrom(this.date, machine.lastBootTime) < maxDays);
  }
}

module.exports = {
  machineScanner
};
