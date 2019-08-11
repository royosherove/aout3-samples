'use strict';

let wasCalled = false;

/**
     *
     * @returns {boolean}
     */
const wasSumCalled = () => {
  return wasCalled;
};

/**
     * Our "production" code to be tested.
     * @param {string} numbers
     * @returns {number}
     */
const sum = (numbers) => {
  wasCalled = true;
  const [a, b] = numbers.split(',');
  const result = Number.parseInt(a, 10) +
            Number.parseInt(b, 10);
  return result;
};

module.exports = {
  sum,
  wasSumCalled
};
