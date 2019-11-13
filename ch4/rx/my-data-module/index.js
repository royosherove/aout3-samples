const {from} = require('rxjs');
const {switchMap} = require('rxjs/operators');

/**
 *
 * @returns {Observable<ObservedValueOf<*[]>>}
 */
const getAllMachines = () => {
  //just some hardcoded machines for our demo
  return from([
    {name: 'machine1', lastBootTime: new Date(2000, 0, 1)},
    {name: 'machine2', lastBootTime: new Date(2000, 0, 1)},
    {name: 'machine3', lastBootTime: new Date(2000, 0, 1)},
  ]);
};


module.exports = {
  getAllMachines
};
