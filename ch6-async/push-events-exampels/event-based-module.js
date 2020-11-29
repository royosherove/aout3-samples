const EventEmitter = require("events");

class Adder extends EventEmitter {
  constructor() {
    super();
  }
  add(x, y) {
    const result = x + y;
    this.emit("added", result);
    return result;
  }
}

module.exports = {
  Adder,
};
