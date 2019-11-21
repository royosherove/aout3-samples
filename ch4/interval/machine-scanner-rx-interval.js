const moment = require('moment');
const {Observable} = require('rxjs');
const {concatMap, tap} = require('rxjs/operators');

const daysFrom = (from, to) => moment(from).diff(to, 'days');

const findRebootedPerInterval = (getMachines, onFound,  maxDays, getDate) => {
  const findMachines = () => findRecentlyRebooted(getMachines(), maxDays, getDate);
  Observable.interval(1000)
      .pipe(
          concatMap(x => Observable.from(findMachines())),
          tap(x => console.dir(x)),
      ).subscribe(x => onFound(x));

  // setInterval(() => {
  //   const rebootsFound = findRecentlyRebooted(getMachines(), maxDays, getDate);
  //
  //   if (rebootsFound.length > 0) {
  //     onFound(rebootsFound);
  //   }
  // },1000);
};

const findRecentlyRebooted = (machines, maxDays, fromDateFn ) =>
  machines.filter(machine =>
    daysFrom(fromDateFn(), machine.lastBootTime) < maxDays);

module.exports = {
  findRecentlyRebooted,
  findRebootedPerInterval
};
