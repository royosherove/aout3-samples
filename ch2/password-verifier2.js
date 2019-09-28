module.exports = class PasswordVerifier2 {
  constructor () {
    this.rules = [];
  }

  addRule (rule) {
    this.rules.push(rule);
  }

  verify (input) {
    const payload = { input, errors: [] };
    const resultPayLoad = this.rules.reduce(this.ruleReducer, payload);
    return resultPayLoad.errors;
  }

  ruleReducer ({ input, errors }, rule) {
    const result = rule(input);
    if (result.passed === false) {
      const newErrors = [...errors];
      newErrors.push(result.reason);
      return { input, errors: newErrors };
    }
    return { input, errors };
  }
};
