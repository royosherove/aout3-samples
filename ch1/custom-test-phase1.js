//this is how I would import the class in pure ES6.
// import {NumberParser} from "./number-parser";
//I'm using this syntax so be compatible with node.js, so we won't need transpilers.
let NumberParser = require('./number-parser');

/**
 * Our "Test" definition.
 */
const parserTest = () => {
  try {
    let np = new NumberParser();
    let result = np.sum("1,2");
    if (result === 3) {
      console.log("parserTest PASSED");
    } else {
      throw new Error("parserTest: expected 3 but was ${result}");
    }
  } catch (e) {
    console.error(e.stack);
  }
};

// our actual test run:
// To run: "node ch1/custom-test-phase1.js
parserTest();
