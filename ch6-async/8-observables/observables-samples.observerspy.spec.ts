import {ingredients, pizzaCookBook$} from "./observables-samples";
import {TestScheduler} from "rxjs/testing";
import {autoUnsubscribe, fakeTime, subscribeSpyTo} from "@hirez_io/observer-spy";

describe('with observerspy test', () => {
    afterEach(autoUnsubscribe);
    test('this test has fake timers', fakeTime((flush) => {
        const spy = subscribeSpyTo(pizzaCookBook$());
        flush();
        expect(spy.getValues()).toEqual([
            'pizza', 'applesauce', 'cheese', 'peppers', 'mushrooms'
        ])
    }));
});


