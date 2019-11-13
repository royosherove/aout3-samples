const { getAllMachines } = require('./my-data-module');
const {filter, tap, reduce} = require('rxjs/operators');

const daysFrom = (from, to) => {
  const ms = from.getTime() - new Date(to).getTime();
  const diff = (ms / 1000) / 60 / 60 / 24; // secs * min * hrs
  console.log(diff);
  return diff;
};

const findRecentlyRebooted = (maxDays, fromDate) => {
  try {
    const machines = getAllMachines();
      const newPipe = machines.pipe(
          filter(machine => {
              console.log(machine.name);
              const daysDiff = daysFrom(fromDate, machine.lastBootTime);
              console.log(`${daysDiff} vs ${maxDays}`);
              return daysDiff < maxDays;
          }),
          tap(m => console.log(`TAP ${m.name}`)),
      );
      newPipe.subscribe(val => console.log(val))
              .then(r => console.log(r));
    // return machines.filter(machine => {
    //   const daysDiff = daysFrom(fromDate, machine.lastBootTime);
    //   console.log(`${daysDiff} vs ${maxDays}`);
    //   return daysDiff < maxDays;
    // });
  }
  catch (e) {
      console.log(e);
      return [];
  }
};

module.exports = {
  findRecentlyRebooted
};
