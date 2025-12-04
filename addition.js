/**
 * Add two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Add multiple numbers together
 * @param {...number} numbers - Numbers to add
 * @returns {number} Sum of all numbers
 */
function addMultiple(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Example usage
console.log('5 + 3 =', add(5, 3));
console.log('10 + 20 + 30 =', addMultiple(10, 20, 30));

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { add, addMultiple };
}
