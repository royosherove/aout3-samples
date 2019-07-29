let colors = require('colors');

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
 * A Test helper function for a simple assertion
 * @param actual (any type)
 * @param expected (any type)
 */
const assertEquals = (actual,expected) =>{
    if (actual!==expected){
        throw new Error(`expected ${expected} but was ${actual}`);
    }
};

/**
 * A Test Helper Function - I named it 'check' so it doesn't get confused with other frameworks.
 * @param {string} name
 * @param {function} cb
 */
const check = (name,cb) =>{
    try{
        cb();
        // console.log(FgGreen,`${name} passed`);
        console.log(`${name} passed`.green);
    }
    catch (e) {
        // console.error(FgRed,`${name} FAILED`);
        console.error(`${name} FAILED`.red);
    }
};

/**
 * Our actual tests begin here
 * To run: "node ch1/custom-test-phase2.js
 */
check("parser with 2 numbers", () => {
    let res = parser("1,2");
    assertEquals(3,res);
});
check("parser with 2 other numbers", () => {
    let res = parser("2,4");
    assertEquals(5,res);
});


