import * as moment from "moment";
import {TimeProviderInterface} from "./time-provider-interface";

export class RealTimeProvider implements TimeProviderInterface {
    getDay(): number {
        return moment().day();
    }
}
