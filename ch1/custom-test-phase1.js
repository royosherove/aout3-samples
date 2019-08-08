// I'm using 'require' to be compatible with node.js,
// so we won't need a transpiler like babel.
const { sum } = require('./number-parser');

/**
 * Our "Test" definition.
 */
const parserTest = () => {
  try {
    const result = sum('1,2');
    if (result === 3) {
      console.log('parserTest example 1 PASSED');
    } else {
      throw new Error(`parserTest: expected 3 but was ${result}`);
    }
  } catch (e) {
    console.error(e.stack);
  }
};

parserTest();
