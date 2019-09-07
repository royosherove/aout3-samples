module.exports = class PasswordVerifier1 {
  constructor () {
    this.__rules = [];
  }

  addRule (rule) {
    this.__rules.push(rule);
  }

  verify (input) {
    if (this.__rules.length === 0) {
      throw new Error('There are no rules configured');
    }
    const errors = [];
    this.__rules.forEach(rule => {
      const result = rule(input);
      if (result.passed === false) {
        errors.push(result.reason);
      }
    });
    return errors;
  }
};
