import moment = require("moment");

export interface TimeProviderInterface {
    getDay(): number;
}

export class RealTimeProvider implements TimeProviderInterface{
    getDay(): number {
        return moment().day();
    }

}
