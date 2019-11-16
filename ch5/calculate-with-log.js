const calculate = (x, y, logger) => {
    const result = x+y;
    logger(result);
    return result;
};

module.exports = {
    calculate
};
