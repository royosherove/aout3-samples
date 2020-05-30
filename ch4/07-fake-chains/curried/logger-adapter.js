const LoggerAdapter = function (configFn) {
  this.info = function (text) {
    configFn().log.info(text);
  };
};

module.exports = {
  LoggerAdapter
};
