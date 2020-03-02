import {ILogger} from "./intefaces/logger";
import {IComplicatedLogger} from "./intefaces/complicated-logger";

export interface IMaintenanceWindow {
   isUnderMaintenance():boolean
}

export class PasswordVerifier3 {
    private _rules: any[];
    private _logger: IComplicatedLogger;
    private _maintenanceWindow: IMaintenanceWindow;

    constructor(rules: any[], logger:IComplicatedLogger, maintenanceWindow:IMaintenanceWindow) {
        this._rules = rules;
        this._logger = logger;
        this._maintenanceWindow = maintenanceWindow;
    }

    verify(input: string):boolean{
        if (this._maintenanceWindow.isUnderMaintenance()){
            this._logger.info('Under Maintenance');
            return false
        }
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


