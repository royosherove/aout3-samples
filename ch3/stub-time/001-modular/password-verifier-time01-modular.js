const { inject, reset, dependencies } = require('./injectable')({ moment: require('moment') });

const SUNDAY = 0; const SATURDAY = 6;

const verifyPassword = (input, rules) => {
  const dayOfWeek = dependencies.moment().day();
  console.log(dayOfWeek);
  if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
    throw Error("It's the weekend!");
  }
  // more code goes here...
  // return list of errors found..
  return [];
};

module.exports = {
  SATURDAY,
  verifyPassword,
  inject,
  reset
};
