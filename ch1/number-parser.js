'use strict';

/**
 * Our System Under Test (SUT)
 * @param {string} numbers
 * @returns {number}
 */
const sum = (numbers) => {
  const [a, b] = numbers.split(',');
  const result = parseInt(a, 10) +
                parseInt(b, 10);
  return result;
};

module.exports.sum = sum;
