'use strict';

let total = 0;

/**
     *
     * @returns {number}
     */
const totalSoFar = () => {
  return total;
};

/**
     * Our "production" code to be tested.
     * @param {string} numbers
     * @returns {number}
     */
const sum = (numbers) => {
  const [a, b] = numbers.split(',');
  const result = Number.parseInt(a, 10) +
            Number.parseInt(b, 10);
  total += result;
  return result;
};

module.exports = {
  sum,
  totalSoFar
};
