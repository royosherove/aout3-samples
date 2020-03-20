// unit test: fake internal time lib
// integration that gives me confidence on the connections for 3rd parties/
// adapter :  simpler internal API
// TODO: caveat: avoid running in parallel
// TODO: will work with native modules
const originalDependencies = {
  moment : require('moment'),
};

let dependencies = {...originalDependencies};

const inject = (fakes) => {
  Object.assign(dependencies, fakes);
  return function reset() {
     dependencies = {...originalDependencies};
  }
};

const SUNDAY = 0; const SATURDAY = 6;

const verifyPassword = (input, rules) => {
  const dayOfWeek = dependencies.moment().day();
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
  inject
};
