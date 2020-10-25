import {ingredients, pizzaCookBook$} from './B-observables-samples-scheduler';
import {VirtualTimeScheduler} from "rxjs";
import {TestScheduler} from "rxjs/testing";

describe('with virtual scheduler', () => {

  test('VirtualScheduler can be flushed', () => {
    const fakeScheduler = new VirtualTimeScheduler();
    const obs$ = pizzaCookBook$(fakeScheduler);
    let found = 0;
    obs$.subscribe(val => {
      console.log(val)
      found++;
    });

    fakeScheduler.flush();
    expect(found).toBe(ingredients.length);
  });
});

describe('with Test scheduler', () => {

  test('TestScheduler can be flushed', () => {
    const fakeScheduler = new TestScheduler(()=> {});
    //without this line, delays over 750ms will not be flushed
    fakeScheduler.maxFrames = Number.POSITIVE_INFINITY;
    const obs$ = pizzaCookBook$(fakeScheduler);
    let found = 0;
    obs$.subscribe(val => {
      console.log(val)
      found++;
    });

    fakeScheduler.flush();
    expect(found).toBe(ingredients.length);
  });
});
