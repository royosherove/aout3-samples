class AdditionLogger {
  constructor(adder, logTarget) {
    adder.on("added", (result) => {
      logTarget.write(result.toString());
    });
  }
}

module.exports = {
  AdditionLogger,
};
