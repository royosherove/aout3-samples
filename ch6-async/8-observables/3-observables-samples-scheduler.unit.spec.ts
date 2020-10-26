import { ingredients, pizzaCookBook$ } from "./B-observables-samples-scheduler";
import { VirtualTimeScheduler } from "rxjs";
import { TestScheduler } from "rxjs/testing";

describe("with virtual scheduler", () => {
  test("VirtualScheduler can be flushed", () => {
    const stubScheduler = new VirtualTimeScheduler();
    const obs$ = pizzaCookBook$(stubScheduler);
    let found = 0;
    obs$.subscribe((val) => {
      found++;
    });
    stubScheduler.flush();
    expect(found).toBe(ingredients.length);
  });
});

describe("with Test scheduler", () => {
  test("TestScheduler can be flushed", () => {
    const stubScheduler = new TestScheduler(() => {});
    //without this line, delays over 750ms will not be flushed
    stubScheduler.maxFrames = Number.POSITIVE_INFINITY;
    const obs$ = pizzaCookBook$(stubScheduler);
    let found = 0;
    obs$.subscribe((val) => {
      found++;
    });

    stubScheduler.flush();
    expect(found).toBe(ingredients.length);
  });
});
