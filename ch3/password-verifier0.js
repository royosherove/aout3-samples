const verifyPassword = (input, rules) => {
  const failed = rules
    .map(rule => rule(input))
    .filter(result => !result.passed)
    .map(result => result.reason);
  return failed;
};

module.exports = {
  verifyPassword
};
