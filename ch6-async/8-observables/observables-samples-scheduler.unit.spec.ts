import {ingredients, pizzaCookBook$} from './observables-samples-scheduler';
import {VirtualTimeScheduler} from "rxjs";

describe('with virtual scheduler', () => {

  test('this test has fake timers', () => {
    const fakeScheduler = new VirtualTimeScheduler();
    const obs$ = pizzaCookBook$(fakeScheduler);
    const maxItems = ingredients.length;
    let found = 0;
    obs$.subscribe(val => {
      console.log(val)
      found++;
    });

    fakeScheduler.flush();
    expect(found).toBe(maxItems);
  });
});
