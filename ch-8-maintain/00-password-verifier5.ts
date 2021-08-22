interface IResult {
  result: boolean;
  input: string;
}

export class PasswordVerifier5 {
  private _rules: ((input: string) => boolean)[];

  constructor(rules: ((input) => boolean)[]) {
    this._rules = rules;
  }

  verify(inputs: string[]): IResult[] {
    const failedResults = inputs.map((input) => this.checkSingleInput(input));
    return failedResults;
  }

  private checkSingleInput(input: string) {
    const failed = this.findFailedRules(input);
    return {
      input,
      result: failed.length === 0,
    };
  }

  protected findFailedRules(input: string) {
    const failed = this._rules
      .map((rule) => rule(input))
      .filter((result) => result === false);
    return failed;
  }
}
