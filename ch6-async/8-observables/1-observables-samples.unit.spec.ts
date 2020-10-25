import {ingredients, pizzaCookBook$} from "./A-observables-samples";

describe('delayed observable',()=>{
  test('this test takes 5 seconds',(done)=>{
    const obs = pizzaCookBook$();
    let found =0;
    console.log('BEFORE')
    obs.subscribe(val => {
      console.log(val)
      found++;
      if (found === ingredients.length) {
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
    expect(found).toBe(ingredients.length);
    done();
  });
});

