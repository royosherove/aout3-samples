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
 * Our "Test" definition.
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

// our actual test run:
// To run: "node ch1/custom-test-phase1.js
parserTest();
