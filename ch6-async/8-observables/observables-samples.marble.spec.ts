import {ingredients, pizzaCookBook$} from "./observables-samples";
import {TestScheduler} from "rxjs/testing";

describe('with marble test', () => {

  test('this test has fake timers', () => {
    const testScheduler = new TestScheduler((actual,expected) => expect(actual).toStrictEqual(expected))
    testScheduler.run((helper)=>{
      helper.expectObservable(pizzaCookBook$())
          .toBe('a 499ms (bc) 496ms d 999ms (e|)',{
            a:ingredients[0].name,
            b:ingredients[1].name,
            c:ingredients[2].name,
            d:ingredients[3].name,
            e:ingredients[4].name,
          });
    })
  });
});

