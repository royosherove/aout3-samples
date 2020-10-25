import {asyncScheduler, from, interval, timer} from 'rxjs'
import {delayWhen, map, pluck} from 'rxjs/operators'

const calculate5 = getInputsFn => {
  return interval(10000)
    .pipe(
      map(() => {
        const { x, y } = getInputsFn();
        return x + y;
      })
    );
};

const calculate6 = async (obs$) => {
  let sum = 0;
  await obs$.subscribe(val => sum += val);
  return sum;
};

export const ingredients = [
    {name: 'pizza', time: 0},
    {name: 'applesauce', time: 500},
    {name: 'cheese', time: 500},
    {name: 'peppers', time: 1000},
    {name: 'mushrooms', time: 2000},
];

export const pizzaCookBook$ = ()=>{
 return from(ingredients).pipe(
   delayWhen(ingredient => timer(ingredient.time)),
   pluck('name')
 )
}


