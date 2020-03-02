import {RealLogger} from "./real-logger";

export class PasswordVerifier {
    private _rules: any[];
    private _logger: RealLogger;

    constructor(rules: any[], logger:RealLogger) {
        this._rules = rules;
        this._logger = logger;
    }

    verify(input: string):boolean{
        const failed = this._rules
            .map(rule => rule(input))
            .filter(result => result === false);

        if (failed.length === 0) {
            this._logger.info('PASSED');
            return true;
        }
        this._logger.info('FAIL');
        return false;
    }
}


