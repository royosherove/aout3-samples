const winston = require('winston');

const makeLogger = () => {
  return winston
    .createLogger({
      level: 'info',
      transports: new winston.transports.Console()
    });
};

const logger = makeLogger();
let wasCalled = false;

/**
   *
   * @returns {boolean}
   */
const wasSumCalled = () => {
  return wasCalled;
};

const sum = (numbers) => {
  wasCalled = true;
  const [a, b] = numbers.split(',');
  logger.info(
    'this is a very important log output',
    { firstNumWas: a, secondNumWas: b });

  return Number.parseInt(a, 10) + Number.parseInt(b, 10);
};

module.exports = {
  wasSumCalled,
  sum
};
// run this file with node (name of this file) to see the logging
sum('10,20');
