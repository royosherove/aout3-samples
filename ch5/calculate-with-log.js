const { sendEmail } = require('./my-module');

const calculate = (x, y, logger) => {
  const result = x + y;
  logger(result);
  return result;
};

const calculate2 = (x, y, logger) => {
  const result = x + y;
  logger.log(result);
  return result;
};

const calculate3 = (x, y, logger) => {
  const result = x + y;
  logger.log(result);
  sendEmail('my subject', 'to email', 'email body');
  return result;
};

module.exports = {
  calculate,
  calculate2,
  calculate3
};
