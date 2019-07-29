let NumberParser = require('./number-parser');
require('colors');

/**
 * A Test helper function for a simple assertion
 * @param actual (any type)
 * @param expected (any type)
 */
const assertEquals = (actual,expected) =>{
    if (actual!==expected){
        throw new Error(`Expected ${expected} but was ${actual}`);
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
        console.log(`"${name}" passed`.green);
    }
    catch (e) {
        // console.error(FgRed,`${name} FAILED`);
        console.error(`"${name}" FAILED`.red, e.stack);
    }
};

/**
 * Our actual tests begin here
 * To run: "node ch1/custom-test-phase2.js
 */
check("sum with 2 numbers should sum them up", () => {
    let res = new NumberParser().sum("1,2");
    assertEquals(3,res);
});
check("sum with mulitple digit numbers should sum them up", () => {
    let res = new NumberParser().sum("1,3");
    assertEquals(4,res);
});


