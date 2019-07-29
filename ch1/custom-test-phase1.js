/**
 * Our "production" code to be tested.
 * @param {string} numbers
 * @returns {number}
 */
const parser = numbers => {
    let [a, b
    ] = numbers.split(",");
    return Number.parseInt(a) + Number.parseInt(b);
};


/**
 * Our "Test"
 */
const parserTest = () => {
    try {
        let result = parser("1,2");
        if (result !== 3) {
            throw new Error(`expected 3 but was ${result}`);
        }
        console.log(result);
    } catch (e) {
        console.error(e.stack)
    }
};

parserTest();
