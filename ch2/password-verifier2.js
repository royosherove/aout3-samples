module.exports = class PasswordVerifier2 {
  constructor () {
    this.__rules = [];
  }

  addRule (rule) {
    this.__rules.push(rule);
  }

  verify (input) {
    const payLoad = { input, errors: [] };
    const resultPayLoad = this.__rules.reduce(this.ruleReducer, payLoad);
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
