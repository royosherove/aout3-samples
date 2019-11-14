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
    await setTimeout(10000);
    return x + y;
};

module.exports = {
    calculate1,
    calculate2,
    calculate3
};
