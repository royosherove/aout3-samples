import { ingredients, pizzaCookBook$ } from "./A-observables-samples";
import {
  autoUnsubscribe,
  fakeTime,
  subscribeSpyTo,
} from "@hirez_io/observer-spy";

describe("with observerspy test", () => {
  // afterEach(autoUnsubscribe);
  test(
    "this test has fake timers",
    fakeTime((flush) => {
    //   const spy = subscribeSpyTo(pizzaCookBook$());
    //   flush();
    //   expect(spy.getValues()).toEqual([
    //     "pizza",
    //     "applesauce",
    //     "cheese",
    //     "peppers",
    //     "mushrooms",
    //   ]);
    })
  );
});
describe("anti pattern on the assert", () => {
  test(
    "this test has fake timers",
    fakeTime((flush) => {
      const spy = subscribeSpyTo(pizzaCookBook$());
      flush();
      expect(spy.getValues()).toEqual(ingredients.map((i) => i.name));
      //this assert is tighly coupled to implementation logic
    })
  );
});
