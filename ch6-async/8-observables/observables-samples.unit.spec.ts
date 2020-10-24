import {ingredients, pizzaCookBook$} from "./observables-samples";
import {VirtualTimeScheduler} from "rxjs";

describe('delayed observable',()=>{
  test('this test takes 5 seconds',(done)=>{
    const obs = pizzaCookBook$();
    const maxItems = ingredients.length;
    let found =0;
    console.log('BEFORE')
    obs.subscribe(val => {
      console.log(val)
      found++;
      if (found === maxItems) {
        done();
      }
    });
  })
})
describe('with fake timers', () => {
  beforeEach(jest.useFakeTimers)
  afterEach(jest.clearAllTimers);

  test('this test has fake timers', (done) => {
    const obs = pizzaCookBook$();
    const maxItems = ingredients.length;
    let found = 0;
    console.log('BEFORE')
    obs.subscribe(val => {
      console.log(val)
      found++;
    });

    jest.advanceTimersToNextTimer();
    jest.advanceTimersToNextTimer();
    jest.advanceTimersToNextTimer();
    jest.advanceTimersToNextTimer();
    expect(found).toBe(maxItems);
    done();
  });
});

