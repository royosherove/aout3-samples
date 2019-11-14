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

/**
 *
 * @param getInputsFn
 * @returns {(source: Observable<any>) => Observable<any>}
 */
const calculate5 =  getInputsFn => {
    return Observable.interval(1000)
        .pipe(
            map(() => {
                const {x, y} = getInputsFn();
                return x + y;
            })
        );
};


module.exports = {
    calculate1,
    calculate2,
    calculate3,
    calculate4,
    calculate5,
};
