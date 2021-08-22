interface IResult {
  result: boolean;
  input: string;
}

export class PasswordVerifier6 {
  private _rules: ((input: string) => boolean)[];
  private _msg: string = "";

  constructor(rules: ((input) => boolean)[]) {
    this._rules = rules;
  }

  getMsg(): string {
    return this._msg;
  }

  verify(inputs: string[]): IResult[] {
    const allResults = inputs.map((input) => this.checkSingleInput(input));
    this.setDescription(allResults);
    return allResults;
  }

  private setDescription(results: IResult[]) {
    const failed = results.filter((res) => !res.result);
    this._msg = `you have ${failed.length} failed rules.`;
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
