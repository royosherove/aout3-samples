class PasswordVerifier1 {
  constructor () {
    this.rules = [];
  }

  addRule (rule) {
    this.rules.push(rule);
  }

  verify (input) {
    if (this.rules.length === 0) {
      throw new Error('There are no rules configured');
    }
    const errors = [];
    this.rules.forEach(rule => {
      const result = rule(input);
      if (result.passed === false) {
        errors.push(result.reason);
      }
    });
    return errors;
  }
}

module.exports = { PasswordVerifier1 };

