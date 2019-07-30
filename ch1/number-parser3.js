const winston = require("winston");

class NumberParser3 {
  constructor() {
    this.wasCalled = false;
    this.logger = this.makeLogger();
  }

  /**
   *
   * @returns {boolean}
   */
  wasSumCalled() {
    return this.wasCalled;
  }

  makeLogger = () => {
    return winston
        .createLogger({
                        level: "info",
                        transports: new winston.transports.Console()
                      });
    };

  sum(numbers) {
    this.wasCalled = true;
    let [a, b] = numbers.split(",");
    this.logger.info(
        "this is a very important log output",
        { firstNumWas: a, secondNumWas: b });

    return Number.parseInt(a) + Number.parseInt(b);
  }
}

module.exports = NumberParser3;
//run this file with node (name of this file) to see the logging
new NumberParser3().sum("10,20");
