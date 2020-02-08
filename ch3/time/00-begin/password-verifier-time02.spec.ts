import {RealTimeProvider, TimeProviderInterface} from "./time-provider-interface";

describe('with interfaces', () => {
    it('can work with typescript', () => {
        const iface: TimeProviderInterface = new RealTimeProvider();
        console.log(iface.getDay());
    });

});
