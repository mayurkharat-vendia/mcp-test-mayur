/**
 * Subtract two numbers
 * @param {number} a - Minuend (first number)
 * @param {number} b - Subtrahend (second number)
 * @returns {number} Difference of a minus b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Subtract multiple numbers from the first number
 * @param {number} initial - Starting number
 * @param {...number} numbers - Numbers to subtract
 * @returns {number} Result after subtracting all numbers
 */
function subtractMultiple(initial, ...numbers) {
  return numbers.reduce((result, num) => result - num, initial);
}

/**
 * Get absolute difference between two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Absolute difference
 */
function absoluteDifference(a, b) {
  return Math.abs(a - b);
}

/**
 * Decrement a number by 1
 * @param {number} num - Number to decrement
 * @returns {number} Number minus 1
 */
function decrement(num) {
  return num - 1;
}

// Example usage
console.log('10 - 3 =', subtract(10, 3));
console.log('100 - 20 - 30 =', subtractMultiple(100, 20, 30));
console.log('Absolute difference between 5 and 12:', absoluteDifference(5, 12));
console.log('Decrement 10:', decrement(10));

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { subtract, subtractMultiple, absoluteDifference, decrement };
}
