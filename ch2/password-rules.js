const oneUpperCaseRule = (input) => {
    return {
        passed: (input.toLowerCase() !== input),
        reason: 'at least one upper case needed'
    };
};


module.exports = {
  oneUpperCaseRule
};
