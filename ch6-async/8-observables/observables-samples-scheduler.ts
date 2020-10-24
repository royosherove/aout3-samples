import {asyncScheduler, from, interval, timer} from 'rxjs'
import {delayWhen, map, pluck} from 'rxjs/operators'


export const ingredients = [
    {name: 'pizza', time: 0},
    {name: 'applesauce', time: 500},
    {name: 'cheese', time: 500},
    {name: 'peppers', time: 1000},
    {name: 'mushrooms', time: 2000},
];

export const pizzaCookBook$ = (scheduler = asyncScheduler)=>{
 return from(ingredients).pipe(
   delayWhen(ingredient => timer(ingredient.time,scheduler)),
   pluck('name')
 )
}


