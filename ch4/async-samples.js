const {Observable} = require('rxjs');
const {map} = require('rxjs/operators');

const calculate1 = (x, y, resultCallback) => {
    setTimeout(() => resultCallback(x + y),
        10000)
};

const calculate2 = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(x + y),
            4000)

    });
};

const calculate3 = async (x, y) => {
    await setTimeout(null,10000);
    return x + y;
};

const calculate4 =  (getInputsFn, resultFn) => {
    setInterval(() => {
        const {x, y} = getInputsFn();
        resultFn(x + y);
    }, 1000);
};

const calculate5 =  getInputsFn => {
    return Observable.interval(10000)
        .pipe(
            map(() => {
                const {x, y} = getInputsFn();
                return x + y;
            })
        );
};

const calculate6 = async(obs$) => {
    let sum =0;
    await obs$.subscribe(val => sum += val);
    return sum;
};



module.exports = {
    calculate1,
    calculate2,
    calculate3,
    calculate4,
    calculate5,
    calculate6,
};
