let colors = require('colors');

/**
 *
 * @param {string} numbers
 * @returns {number}
 */
const parser = numbers => {
    let [a, b
    ] = numbers.split(",");
    return Number.parseInt(a) + Number.parseInt(b);
};

const assertEquals = (actual,expected) =>{
    if (actual!==expected){
        throw new Error(`expected ${expected} but was ${actual}`);
    }
};

/**
 *
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

check("parser with 2 numbers", () => {
    let res = parser("1,2");
    assertEquals(3,res);
});
check("parser with 2 other numbers", () => {
    let res = parser("2,4");
    assertEquals(5,res);
});

// const parserTest = () => {
//     try {
//         let res = parser("1,2");
//         assertEquals(3,res);
//         console.log(res);
//     } catch (e) {
//         console.error(e.stack)
//     }
// };

// parserTest();

