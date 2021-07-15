const makePerson = (x, y) => {
  return {
    name: x,
    age: y,
    type: "person",
  };
};

const isName = (input) => {
  return input.split(" ").length === 2;
};

const trigger = (x, y, callback) => {
  callback("I'm triggered");
  return x + y;
};

const makeGreeting = (name) => {
  return "hello" + name;
};

module.exports = {
  makePerson,
  trigger,
  isName,
  makeGreeting,
};
